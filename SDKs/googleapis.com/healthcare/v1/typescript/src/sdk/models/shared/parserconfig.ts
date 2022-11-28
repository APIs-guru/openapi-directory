import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaPackage } from "./schemapackage";


export enum ParserConfigVersionEnum {
    ParserVersionUnspecified = "PARSER_VERSION_UNSPECIFIED",
    V1 = "V1",
    V2 = "V2",
    V3 = "V3"
}


// ParserConfig
/** 
 * The configuration for the parser. It determines how the server parses the messages.
**/
export class ParserConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowNullHeader" })
  allowNullHeader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: SchemaPackage;

  @SpeakeasyMetadata({ data: "json, name=segmentTerminator" })
  segmentTerminator?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: ParserConfigVersionEnum;
}
