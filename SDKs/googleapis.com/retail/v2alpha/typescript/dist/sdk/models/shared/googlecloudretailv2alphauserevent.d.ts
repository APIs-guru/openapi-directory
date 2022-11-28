import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaCompletionDetail } from "./googlecloudretailv2alphacompletiondetail";
import { GoogleCloudRetailV2alphaProductDetail } from "./googlecloudretailv2alphaproductdetail";
import { GoogleCloudRetailV2alphaPurchaseTransaction } from "./googlecloudretailv2alphapurchasetransaction";
import { GoogleCloudRetailV2alphaUserInfo } from "./googlecloudretailv2alphauserinfo";
import { GoogleCloudRetailV2alphaProductDetailInput } from "./googlecloudretailv2alphaproductdetail";
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export declare class GoogleCloudRetailV2alphaUserEvent extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;
    attributionToken?: string;
    cartId?: string;
    completionDetail?: GoogleCloudRetailV2alphaCompletionDetail;
    eventTime?: string;
    eventType?: string;
    experimentIds?: string[];
    filter?: string;
    offset?: number;
    orderBy?: string;
    pageCategories?: string[];
    pageViewId?: string;
    productDetails?: GoogleCloudRetailV2alphaProductDetail[];
    purchaseTransaction?: GoogleCloudRetailV2alphaPurchaseTransaction;
    referrerUri?: string;
    searchQuery?: string;
    sessionId?: string;
    uri?: string;
    userInfo?: GoogleCloudRetailV2alphaUserInfo;
    visitorId?: string;
}
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export declare class GoogleCloudRetailV2alphaUserEventInput extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;
    attributionToken?: string;
    cartId?: string;
    completionDetail?: GoogleCloudRetailV2alphaCompletionDetail;
    eventTime?: string;
    eventType?: string;
    experimentIds?: string[];
    filter?: string;
    offset?: number;
    orderBy?: string;
    pageCategories?: string[];
    pageViewId?: string;
    productDetails?: GoogleCloudRetailV2alphaProductDetailInput[];
    purchaseTransaction?: GoogleCloudRetailV2alphaPurchaseTransaction;
    referrerUri?: string;
    searchQuery?: string;
    sessionId?: string;
    uri?: string;
    userInfo?: GoogleCloudRetailV2alphaUserInfo;
    visitorId?: string;
}
