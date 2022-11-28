import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1CropHint } from "./googlecloudvisionv1p1beta1crophint";



// GoogleCloudVisionV1p1beta1CropHintsAnnotation
/** 
 * Set of crop hints that are used to generate new crops when serving images.
**/
export class GoogleCloudVisionV1p1beta1CropHintsAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cropHints", elemType: GoogleCloudVisionV1p1beta1CropHint })
  cropHints?: GoogleCloudVisionV1p1beta1CropHint[];
}
