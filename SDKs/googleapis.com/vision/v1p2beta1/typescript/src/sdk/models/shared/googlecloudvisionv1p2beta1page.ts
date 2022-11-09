import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1Block } from "./googlecloudvisionv1p2beta1block";
import { GoogleCloudVisionV1p2beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p2beta1textannotationtextproperty";


// GoogleCloudVisionV1p2beta1Page
/** 
 * Detected page from OCR.
**/
export class GoogleCloudVisionV1p2beta1Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocks", elemType: shared.GoogleCloudVisionV1p2beta1Block })
  blocks?: GoogleCloudVisionV1p2beta1Block[];

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
