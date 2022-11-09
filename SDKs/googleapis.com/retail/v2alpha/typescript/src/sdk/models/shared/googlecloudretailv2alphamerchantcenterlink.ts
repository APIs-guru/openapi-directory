import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaMerchantCenterFeedFilter } from "./googlecloudretailv2alphamerchantcenterfeedfilter";


// GoogleCloudRetailV2alphaMerchantCenterLink
/** 
 * Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.
**/
export class GoogleCloudRetailV2alphaMerchantCenterLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchId" })
  branchId?: string;

  @Metadata({ data: "json, name=destinations" })
  destinations?: string[];

  @Metadata({ data: "json, name=feeds", elemType: shared.GoogleCloudRetailV2alphaMerchantCenterFeedFilter })
  feeds?: GoogleCloudRetailV2alphaMerchantCenterFeedFilter[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=merchantCenterAccountId" })
  merchantCenterAccountId?: string;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
