import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaCompletionDetail } from "./googlecloudretailv2betacompletiondetail";
import { GoogleCloudRetailV2betaProductDetail } from "./googlecloudretailv2betaproductdetail";
import { GoogleCloudRetailV2betaPurchaseTransaction } from "./googlecloudretailv2betapurchasetransaction";
import { GoogleCloudRetailV2betaUserInfo } from "./googlecloudretailv2betauserinfo";


// GoogleCloudRetailV2betaUserEvent
/** 
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRetailV2betaUserEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=cartId" })
  cartId?: string;

  @Metadata({ data: "json, name=completionDetail" })
  completionDetail?: GoogleCloudRetailV2betaCompletionDetail;

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

  @Metadata({ data: "json, name=productDetails", elemType: shared.GoogleCloudRetailV2betaProductDetail })
  productDetails?: GoogleCloudRetailV2betaProductDetail[];

  @Metadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRetailV2betaPurchaseTransaction;

  @Metadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @Metadata({ data: "json, name=searchQuery" })
  searchQuery?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2betaUserInfo;

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
