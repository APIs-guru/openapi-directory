import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaMerchantCenterFeedFilter
/** 
 * Merchant Center Feed filter criterion.
**/
export class GoogleCloudRetailV2alphaMerchantCenterFeedFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=primaryFeedId" })
  primaryFeedId?: string;

  @Metadata({ data: "json, name=primaryFeedName" })
  primaryFeedName?: string;
}
