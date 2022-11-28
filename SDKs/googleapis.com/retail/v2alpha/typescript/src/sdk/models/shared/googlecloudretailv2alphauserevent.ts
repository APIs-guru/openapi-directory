import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaCompletionDetail } from "./googlecloudretailv2alphacompletiondetail";
import { GoogleCloudRetailV2alphaProductDetail } from "./googlecloudretailv2alphaproductdetail";
import { GoogleCloudRetailV2alphaPurchaseTransaction } from "./googlecloudretailv2alphapurchasetransaction";
import { GoogleCloudRetailV2alphaUserInfo } from "./googlecloudretailv2alphauserinfo";
import { GoogleCloudRetailV2alphaProductDetailInput } from "./googlecloudretailv2alphaproductdetail";



// GoogleCloudRetailV2alphaUserEvent
/** 
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRetailV2alphaUserEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=cartId" })
  cartId?: string;

  @SpeakeasyMetadata({ data: "json, name=completionDetail" })
  completionDetail?: GoogleCloudRetailV2alphaCompletionDetail;

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

  @SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2alphaProductDetail })
  productDetails?: GoogleCloudRetailV2alphaProductDetail[];

  @SpeakeasyMetadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRetailV2alphaPurchaseTransaction;

  @SpeakeasyMetadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=searchQuery" })
  searchQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2alphaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}


// GoogleCloudRetailV2alphaUserEventInput
/** 
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRetailV2alphaUserEventInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=cartId" })
  cartId?: string;

  @SpeakeasyMetadata({ data: "json, name=completionDetail" })
  completionDetail?: GoogleCloudRetailV2alphaCompletionDetail;

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

  @SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2alphaProductDetailInput })
  productDetails?: GoogleCloudRetailV2alphaProductDetailInput[];

  @SpeakeasyMetadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRetailV2alphaPurchaseTransaction;

  @SpeakeasyMetadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=searchQuery" })
  searchQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2alphaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
