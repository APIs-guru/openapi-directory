import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Page } from "./googlecloudvisionv1p2beta1page";
/**
 * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
**/
export declare class GoogleCloudVisionV1p2beta1TextAnnotation extends SpeakeasyBase {
    pages?: GoogleCloudVisionV1p2beta1Page[];
    text?: string;
}
