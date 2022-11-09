import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaMerchantCenterFeedFilter } from "./googlecloudretailv2betamerchantcenterfeedfilter";


// GoogleCloudRetailV2betaMerchantCenterLink
/** 
 * Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.
**/
export class GoogleCloudRetailV2betaMerchantCenterLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchId" })
  branchId?: string;

  @Metadata({ data: "json, name=destinations" })
  destinations?: string[];

  @Metadata({ data: "json, name=feeds", elemType: shared.GoogleCloudRetailV2betaMerchantCenterFeedFilter })
  feeds?: GoogleCloudRetailV2betaMerchantCenterFeedFilter[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=merchantCenterAccountId" })
  merchantCenterAccountId?: string;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
