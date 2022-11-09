import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2Rating
/** 
 * The rating of a Product.
**/
export class GoogleCloudRetailV2Rating extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageRating" })
  averageRating?: number;

  @Metadata({ data: "json, name=ratingCount" })
  ratingCount?: number;

  @Metadata({ data: "json, name=ratingHistogram" })
  ratingHistogram?: number[];
}
