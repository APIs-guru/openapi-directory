import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImageConfigTextRedactionModeEnum {
    TextRedactionModeUnspecified = "TEXT_REDACTION_MODE_UNSPECIFIED",
    RedactAllText = "REDACT_ALL_TEXT",
    RedactSensitiveText = "REDACT_SENSITIVE_TEXT",
    RedactNoText = "REDACT_NO_TEXT",
    RedactSensitiveTextCleanDescriptors = "REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS"
}
/**
 * Specifies how to handle de-identification of image pixels.
**/
export declare class ImageConfig extends SpeakeasyBase {
    additionalInfoTypes?: string[];
    excludeInfoTypes?: string[];
    textRedactionMode?: ImageConfigTextRedactionModeEnum;
}
