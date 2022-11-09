import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommendationengineV1beta1Image
/** 
 * Catalog item thumbnail/detail image.
**/
export class GoogleCloudRecommendationengineV1beta1Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
