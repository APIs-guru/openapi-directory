import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProcessingOptionsHtmlSanitizationEnum {
    HtmlSanitizationUnspecified = "HTML_SANITIZATION_UNSPECIFIED"
,    HtmlSanitizationDisabled = "HTML_SANITIZATION_DISABLED"
,    SimpleFormattingOnly = "SIMPLE_FORMATTING_ONLY"
}


// ProcessingOptions
/** 
 * Options for job processing.
**/
export class ProcessingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableStreetAddressResolution" })
  disableStreetAddressResolution?: boolean;

  @Metadata({ data: "json, name=htmlSanitization" })
  htmlSanitization?: ProcessingOptionsHtmlSanitizationEnum;
}
