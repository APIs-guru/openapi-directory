import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p2beta1CropHintsParams
/** 
 * Parameters for crop hints annotation request.
**/
export class GoogleCloudVisionV1p2beta1CropHintsParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectRatios" })
  aspectRatios?: number[];
}
