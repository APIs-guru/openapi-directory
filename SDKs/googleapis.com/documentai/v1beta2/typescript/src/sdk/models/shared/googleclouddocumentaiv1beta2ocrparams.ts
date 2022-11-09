import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2OcrParams
/** 
 * Parameters to control Optical Character Recognition (OCR) behavior.
**/
export class GoogleCloudDocumentaiV1beta2OcrParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageHints" })
  languageHints?: string[];
}
