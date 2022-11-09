import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaCompletionDetail } from "./googlecloudretailv2alphacompletiondetail";
import { GoogleCloudRetailV2alphaProductDetail } from "./googlecloudretailv2alphaproductdetail";
import { GoogleCloudRetailV2alphaPurchaseTransaction } from "./googlecloudretailv2alphapurchasetransaction";
import { GoogleCloudRetailV2alphaUserInfo } from "./googlecloudretailv2alphauserinfo";


// GoogleCloudRetailV2alphaUserEvent
/** 
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
export class GoogleCloudRetailV2alphaUserEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;

  @Metadata({ data: "json, name=attributionToken" })
  attributionToken?: string;

  @Metadata({ data: "json, name=cartId" })
  cartId?: string;

  @Metadata({ data: "json, name=completionDetail" })
  completionDetail?: GoogleCloudRetailV2alphaCompletionDetail;

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

  @Metadata({ data: "json, name=productDetails", elemType: shared.GoogleCloudRetailV2alphaProductDetail })
  productDetails?: GoogleCloudRetailV2alphaProductDetail[];

  @Metadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRetailV2alphaPurchaseTransaction;

  @Metadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @Metadata({ data: "json, name=searchQuery" })
  searchQuery?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=userInfo" })
  userInfo?: GoogleCloudRetailV2alphaUserInfo;

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
