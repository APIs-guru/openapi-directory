import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SchemaTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ProtocolBuffer = "PROTOCOL_BUFFER",
    Avro = "AVRO"
}


// Schema
/** 
 * A schema resource.
**/
export class Schema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SchemaTypeEnum;
}


// SchemaInput
/** 
 * A schema resource.
**/
export class SchemaInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SchemaTypeEnum;
}
