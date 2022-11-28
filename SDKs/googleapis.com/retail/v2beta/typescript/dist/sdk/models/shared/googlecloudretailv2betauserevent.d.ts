import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaCompletionDetail } from "./googlecloudretailv2betacompletiondetail";
import { GoogleCloudRetailV2betaProductDetail } from "./googlecloudretailv2betaproductdetail";
import { GoogleCloudRetailV2betaPurchaseTransaction } from "./googlecloudretailv2betapurchasetransaction";
import { GoogleCloudRetailV2betaUserInfo } from "./googlecloudretailv2betauserinfo";
import { GoogleCloudRetailV2betaProductDetailInput } from "./googlecloudretailv2betaproductdetail";
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export declare class GoogleCloudRetailV2betaUserEvent extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;
    attributionToken?: string;
    cartId?: string;
    completionDetail?: GoogleCloudRetailV2betaCompletionDetail;
    eventTime?: string;
    eventType?: string;
    experimentIds?: string[];
    filter?: string;
    offset?: number;
    orderBy?: string;
    pageCategories?: string[];
    pageViewId?: string;
    productDetails?: GoogleCloudRetailV2betaProductDetail[];
    purchaseTransaction?: GoogleCloudRetailV2betaPurchaseTransaction;
    referrerUri?: string;
    searchQuery?: string;
    sessionId?: string;
    uri?: string;
    userInfo?: GoogleCloudRetailV2betaUserInfo;
    visitorId?: string;
}
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export declare class GoogleCloudRetailV2betaUserEventInput extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;
    attributionToken?: string;
    cartId?: string;
    completionDetail?: GoogleCloudRetailV2betaCompletionDetail;
    eventTime?: string;
    eventType?: string;
    experimentIds?: string[];
    filter?: string;
    offset?: number;
    orderBy?: string;
    pageCategories?: string[];
    pageViewId?: string;
    productDetails?: GoogleCloudRetailV2betaProductDetailInput[];
    purchaseTransaction?: GoogleCloudRetailV2betaPurchaseTransaction;
    referrerUri?: string;
    searchQuery?: string;
    sessionId?: string;
    uri?: string;
    userInfo?: GoogleCloudRetailV2betaUserInfo;
    visitorId?: string;
}
