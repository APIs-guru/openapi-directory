import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaCompletionDetail } from "./googlecloudretailv2betacompletiondetail";
import { GoogleCloudRetailV2betaProductDetail } from "./googlecloudretailv2betaproductdetail";
import { GoogleCloudRetailV2betaPurchaseTransaction } from "./googlecloudretailv2betapurchasetransaction";
import { GoogleCloudRetailV2betaUserInfo } from "./googlecloudretailv2betauserinfo";
import { GoogleCloudRetailV2betaProductDetailInput } from "./googlecloudretailv2betaproductdetail";



// GoogleCloudRetailV2betaUserEvent
/** 
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRetailV2betaUserEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=cartId" })
  cartId?: string;

  @SpeakeasyMetadata({ data: "json, name=completionDetail" })
  completionDetail?: GoogleCloudRetailV2betaCompletionDetail;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=experimentIds" })
  experimentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=pageCategories" })
  pageCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=pageViewId" })
  pageViewId?: string;

  @SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2betaProductDetail })
  productDetails?: GoogleCloudRetailV2betaProductDetail[];

  @SpeakeasyMetadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRetailV2betaPurchaseTransaction;

  @SpeakeasyMetadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=searchQuery" })
  searchQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}


// GoogleCloudRetailV2betaUserEventInput
/** 
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRetailV2betaUserEventInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=cartId" })
  cartId?: string;

  @SpeakeasyMetadata({ data: "json, name=completionDetail" })
  completionDetail?: GoogleCloudRetailV2betaCompletionDetail;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=experimentIds" })
  experimentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=pageCategories" })
  pageCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=pageViewId" })
  pageViewId?: string;

  @SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2betaProductDetailInput })
  productDetails?: GoogleCloudRetailV2betaProductDetailInput[];

  @SpeakeasyMetadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRetailV2betaPurchaseTransaction;

  @SpeakeasyMetadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=searchQuery" })
  searchQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
