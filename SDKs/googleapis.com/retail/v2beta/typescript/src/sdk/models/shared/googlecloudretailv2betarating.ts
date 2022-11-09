import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaRating
/** 
 * The rating of a Product.
**/
export class GoogleCloudRetailV2betaRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageRating" })
  averageRating?: number;

  @Metadata({ data: "json, name=ratingCount" })
  ratingCount?: number;

  @Metadata({ data: "json, name=ratingHistogram" })
  ratingHistogram?: number[];
}
