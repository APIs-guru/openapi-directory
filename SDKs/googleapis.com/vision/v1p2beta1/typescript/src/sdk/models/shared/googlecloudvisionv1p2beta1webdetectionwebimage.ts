import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVisionV1p2beta1WebDetectionWebImage
/** 
 * Metadata for online images.
**/
export class GoogleCloudVisionV1p2beta1WebDetectionWebImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
