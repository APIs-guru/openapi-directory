import { SpeakeasyBase } from "../../../internal/utils";
import { TypeInfoSchemaInfo } from "./typeinfoschemainfo";
/**
 * Type Information. Contains detailed information about a composite type, base type, or base type with specific collection.
**/
export declare class TypeInfo extends SpeakeasyBase {
    description?: string;
    documentationLink?: string;
    kind?: string;
    name?: string;
    schema?: TypeInfoSchemaInfo;
    selfLink?: string;
    title?: string;
}
