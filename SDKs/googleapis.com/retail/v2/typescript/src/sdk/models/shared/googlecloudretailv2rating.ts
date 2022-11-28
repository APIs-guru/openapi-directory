import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2Rating
/** 
 * The rating of a Product.
**/
export class GoogleCloudRetailV2Rating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageRating" })
  averageRating?: number;

  @SpeakeasyMetadata({ data: "json, name=ratingCount" })
  ratingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ratingHistogram" })
  ratingHistogram?: number[];
}
