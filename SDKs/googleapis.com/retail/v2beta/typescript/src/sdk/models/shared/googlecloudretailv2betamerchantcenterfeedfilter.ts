import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaMerchantCenterFeedFilter
/** 
 * Merchant Center Feed filter criterion.
**/
export class GoogleCloudRetailV2betaMerchantCenterFeedFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=primaryFeedId" })
  primaryFeedId?: string;

  @Metadata({ data: "json, name=primaryFeedName" })
  primaryFeedName?: string;
}
