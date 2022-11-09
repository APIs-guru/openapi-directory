import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SchemaTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    ProtocolBuffer = "PROTOCOL_BUFFER"
,    Avro = "AVRO"
}


// Schema
/** 
 * A schema resource.
**/
export class Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=type" })
  type?: SchemaTypeEnum;
}
