import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p2beta1WebDetectionWebImage
/** 
 * Metadata for online images.
**/
export class GoogleCloudVisionV1p2beta1WebDetectionWebImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
