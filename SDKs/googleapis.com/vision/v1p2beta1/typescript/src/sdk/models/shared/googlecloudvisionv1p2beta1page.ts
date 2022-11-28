import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Block } from "./googlecloudvisionv1p2beta1block";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";



// GoogleCloudVisionV1p2beta1Page
/** 
 * Detected page from OCR.
**/
export class GoogleCloudVisionV1p2beta1Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocks", elemType: GoogleCloudVisionV1p2beta1Block })
  blocks?: GoogleCloudVisionV1p2beta1Block[];

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
