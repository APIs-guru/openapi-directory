import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1Block } from "./googlecloudvisionv1p1beta1block";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";


// GoogleCloudVisionV1p1beta1Page
/** 
 * Detected page from OCR.
**/
export class GoogleCloudVisionV1p1beta1Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocks", elemType: shared.GoogleCloudVisionV1p1beta1Block })
  blocks?: GoogleCloudVisionV1p1beta1Block[];

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=property" })
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
