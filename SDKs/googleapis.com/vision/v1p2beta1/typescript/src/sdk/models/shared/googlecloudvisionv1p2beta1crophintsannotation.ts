import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1CropHint } from "./googlecloudvisionv1p2beta1crophint";


// GoogleCloudVisionV1p2beta1CropHintsAnnotation
/** 
 * Set of crop hints that are used to generate new crops when serving images.
**/
export class GoogleCloudVisionV1p2beta1CropHintsAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=cropHints", elemType: shared.GoogleCloudVisionV1p2beta1CropHint })
  cropHints?: GoogleCloudVisionV1p2beta1CropHint[];
}
