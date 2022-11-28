import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaPackage } from "./schemapackage";
export declare enum ParserConfigVersionEnum {
    ParserVersionUnspecified = "PARSER_VERSION_UNSPECIFIED",
    V1 = "V1",
    V2 = "V2",
    V3 = "V3"
}
/**
 * The configuration for the parser. It determines how the server parses the messages.
**/
export declare class ParserConfig extends SpeakeasyBase {
    allowNullHeader?: boolean;
    schema?: SchemaPackage;
    segmentTerminator?: string;
    version?: ParserConfigVersionEnum;
}
