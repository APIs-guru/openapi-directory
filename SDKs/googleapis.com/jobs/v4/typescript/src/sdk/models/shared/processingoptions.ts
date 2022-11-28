import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProcessingOptionsHtmlSanitizationEnum {
    HtmlSanitizationUnspecified = "HTML_SANITIZATION_UNSPECIFIED",
    HtmlSanitizationDisabled = "HTML_SANITIZATION_DISABLED",
    SimpleFormattingOnly = "SIMPLE_FORMATTING_ONLY"
}


// ProcessingOptions
/** 
 * Options for job processing.
**/
export class ProcessingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableStreetAddressResolution" })
  disableStreetAddressResolution?: boolean;

  @SpeakeasyMetadata({ data: "json, name=htmlSanitization" })
  htmlSanitization?: ProcessingOptionsHtmlSanitizationEnum;
}
