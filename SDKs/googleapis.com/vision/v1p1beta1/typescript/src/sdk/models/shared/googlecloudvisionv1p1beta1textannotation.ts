import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1Page } from "./googlecloudvisionv1p1beta1page";


// GoogleCloudVisionV1p1beta1TextAnnotation
/** 
 * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
**/
export class GoogleCloudVisionV1p1beta1TextAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages", elemType: shared.GoogleCloudVisionV1p1beta1Page })
  pages?: GoogleCloudVisionV1p1beta1Page[];

  @Metadata({ data: "json, name=text" })
  text?: string;
}
