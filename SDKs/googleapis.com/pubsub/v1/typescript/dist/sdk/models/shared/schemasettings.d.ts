import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SchemaSettingsEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED",
    Json = "JSON",
    Binary = "BINARY"
}
/**
 * Settings for validating messages published against a schema.
**/
export declare class SchemaSettings extends SpeakeasyBase {
    encoding?: SchemaSettingsEncodingEnum;
    firstRevisionId?: string;
    lastRevisionId?: string;
    schema?: string;
}
