import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2OcrParams
/** 
 * Parameters to control Optical Character Recognition (OCR) behavior.
**/
export class GoogleCloudDocumentaiV1beta2OcrParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageHints" })
  languageHints?: string[];
}
