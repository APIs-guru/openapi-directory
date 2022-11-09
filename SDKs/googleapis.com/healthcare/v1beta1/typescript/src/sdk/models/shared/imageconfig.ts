import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImageConfigTextRedactionModeEnum {
    TextRedactionModeUnspecified = "TEXT_REDACTION_MODE_UNSPECIFIED"
,    RedactAllText = "REDACT_ALL_TEXT"
,    RedactSensitiveText = "REDACT_SENSITIVE_TEXT"
,    RedactNoText = "REDACT_NO_TEXT"
}


// ImageConfig
/** 
 * Specifies how to handle de-identification of image pixels.
**/
export class ImageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=textRedactionMode" })
  textRedactionMode?: ImageConfigTextRedactionModeEnum;
}
