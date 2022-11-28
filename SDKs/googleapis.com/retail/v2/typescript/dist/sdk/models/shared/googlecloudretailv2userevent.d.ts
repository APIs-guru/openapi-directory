import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2CompletionDetail } from "./googlecloudretailv2completiondetail";
import { GoogleCloudRetailV2ProductDetailInput } from "./googlecloudretailv2productdetail";
import { GoogleCloudRetailV2PurchaseTransaction } from "./googlecloudretailv2purchasetransaction";
import { GoogleCloudRetailV2UserInfo } from "./googlecloudretailv2userinfo";
import { GoogleCloudRetailV2ProductDetail } from "./googlecloudretailv2productdetail";
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export declare class GoogleCloudRetailV2UserEventInput extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;
    attributionToken?: string;
    cartId?: string;
    completionDetail?: GoogleCloudRetailV2CompletionDetail;
    eventTime?: string;
    eventType?: string;
    experimentIds?: string[];
    filter?: string;
    offset?: number;
    orderBy?: string;
    pageCategories?: string[];
    pageViewId?: string;
    productDetails?: GoogleCloudRetailV2ProductDetailInput[];
    purchaseTransaction?: GoogleCloudRetailV2PurchaseTransaction;
    referrerUri?: string;
    searchQuery?: string;
    sessionId?: string;
    uri?: string;
    userInfo?: GoogleCloudRetailV2UserInfo;
    visitorId?: string;
}
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export declare class GoogleCloudRetailV2UserEvent extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;
    attributionToken?: string;
    cartId?: string;
    completionDetail?: GoogleCloudRetailV2CompletionDetail;
    eventTime?: string;
    eventType?: string;
    experimentIds?: string[];
    filter?: string;
    offset?: number;
    orderBy?: string;
    pageCategories?: string[];
    pageViewId?: string;
    productDetails?: GoogleCloudRetailV2ProductDetail[];
    purchaseTransaction?: GoogleCloudRetailV2PurchaseTransaction;
    referrerUri?: string;
    searchQuery?: string;
    sessionId?: string;
    uri?: string;
    userInfo?: GoogleCloudRetailV2UserInfo;
    visitorId?: string;
}
