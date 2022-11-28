import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Page } from "./googlecloudvisionv1p2beta1page";



// GoogleCloudVisionV1p2beta1TextAnnotation
/** 
 * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
**/
export class GoogleCloudVisionV1p2beta1TextAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages", elemType: GoogleCloudVisionV1p2beta1Page })
  pages?: GoogleCloudVisionV1p2beta1Page[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
