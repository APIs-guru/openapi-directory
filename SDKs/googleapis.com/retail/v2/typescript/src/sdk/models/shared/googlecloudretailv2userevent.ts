import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2CompletionDetail } from "./googlecloudretailv2completiondetail";
import { GoogleCloudRetailV2ProductDetailInput } from "./googlecloudretailv2productdetail";
import { GoogleCloudRetailV2PurchaseTransaction } from "./googlecloudretailv2purchasetransaction";
import { GoogleCloudRetailV2UserInfo } from "./googlecloudretailv2userinfo";
import { GoogleCloudRetailV2ProductDetail } from "./googlecloudretailv2productdetail";



// GoogleCloudRetailV2UserEventInput
/** 
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRetailV2UserEventInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=cartId" })
  cartId?: string;

  @SpeakeasyMetadata({ data: "json, name=completionDetail" })
  completionDetail?: GoogleCloudRetailV2CompletionDetail;

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

  @SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2ProductDetailInput })
  productDetails?: GoogleCloudRetailV2ProductDetailInput[];

  @SpeakeasyMetadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRetailV2PurchaseTransaction;

  @SpeakeasyMetadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=searchQuery" })
  searchQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}


// GoogleCloudRetailV2UserEvent
/** 
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRetailV2UserEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=cartId" })
  cartId?: string;

  @SpeakeasyMetadata({ data: "json, name=completionDetail" })
  completionDetail?: GoogleCloudRetailV2CompletionDetail;

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

  @SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2ProductDetail })
  productDetails?: GoogleCloudRetailV2ProductDetail[];

  @SpeakeasyMetadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRetailV2PurchaseTransaction;

  @SpeakeasyMetadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=searchQuery" })
  searchQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
