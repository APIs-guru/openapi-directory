import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2CompletionDetail } from "./googlecloudretailv2completiondetail";
import { GoogleCloudRetailV2ProductDetail } from "./googlecloudretailv2productdetail";
import { GoogleCloudRetailV2PurchaseTransaction } from "./googlecloudretailv2purchasetransaction";
import { GoogleCloudRetailV2UserInfo } from "./googlecloudretailv2userinfo";


// GoogleCloudRetailV2UserEvent
/** 
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRetailV2UserEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=cartId" })
  cartId?: string;

  @Metadata({ data: "json, name=completionDetail" })
  completionDetail?: GoogleCloudRetailV2CompletionDetail;

  @Metadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=experimentIds" })
  experimentIds?: string[];

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "json, name=pageCategories" })
  pageCategories?: string[];

  @Metadata({ data: "json, name=pageViewId" })
  pageViewId?: string;

  @Metadata({ data: "json, name=productDetails", elemType: shared.GoogleCloudRetailV2ProductDetail })
  productDetails?: GoogleCloudRetailV2ProductDetail[];

  @Metadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRetailV2PurchaseTransaction;

  @Metadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @Metadata({ data: "json, name=searchQuery" })
  searchQuery?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2UserInfo;

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
