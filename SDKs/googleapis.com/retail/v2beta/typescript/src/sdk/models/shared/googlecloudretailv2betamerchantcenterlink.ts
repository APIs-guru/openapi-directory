import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaMerchantCenterFeedFilter } from "./googlecloudretailv2betamerchantcenterfeedfilter";



// GoogleCloudRetailV2betaMerchantCenterLink
/** 
 * Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.
**/
export class GoogleCloudRetailV2betaMerchantCenterLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchId" })
  branchId?: string;

  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=feeds", elemType: GoogleCloudRetailV2betaMerchantCenterFeedFilter })
  feeds?: GoogleCloudRetailV2betaMerchantCenterFeedFilter[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantCenterAccountId" })
  merchantCenterAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
