import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SchemaSettingsEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED",
    Json = "JSON",
    Binary = "BINARY"
}


// SchemaSettings
/** 
 * Settings for validating messages published against a schema.
**/
export class SchemaSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: SchemaSettingsEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=firstRevisionId" })
  firstRevisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRevisionId" })
  lastRevisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;
}
