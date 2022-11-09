import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SchemaSettingsEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED"
,    Json = "JSON"
,    Binary = "BINARY"
}


// SchemaSettings
/** 
 * Settings for validating messages published against a schema.
**/
export class SchemaSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=encoding" })
  encoding?: SchemaSettingsEncodingEnum;

  @Metadata({ data: "json, name=firstRevisionId" })
  firstRevisionId?: string;

  @Metadata({ data: "json, name=lastRevisionId" })
  lastRevisionId?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;
}
