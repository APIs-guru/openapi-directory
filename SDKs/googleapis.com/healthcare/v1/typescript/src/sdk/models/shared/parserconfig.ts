import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaPackage } from "./schemapackage";

export enum ParserConfigVersionEnum {
    ParserVersionUnspecified = "PARSER_VERSION_UNSPECIFIED"
,    V1 = "V1"
,    V2 = "V2"
}


// ParserConfig
/** 
 * The configuration for the parser. It determines how the server parses the messages.
**/
export class ParserConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowNullHeader" })
  allowNullHeader?: boolean;

  @Metadata({ data: "json, name=schema" })
  schema?: SchemaPackage;

  @Metadata({ data: "json, name=segmentTerminator" })
  segmentTerminator?: string;

  @Metadata({ data: "json, name=version" })
  version?: ParserConfigVersionEnum;
}
