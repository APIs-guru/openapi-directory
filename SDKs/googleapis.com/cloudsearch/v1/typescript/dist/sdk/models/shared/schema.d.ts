import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectDefinition } from "./objectdefinition";
/**
 * The schema definition for a data source.
**/
export declare class Schema extends SpeakeasyBase {
    objectDefinitions?: ObjectDefinition[];
    operationIds?: string[];
}
