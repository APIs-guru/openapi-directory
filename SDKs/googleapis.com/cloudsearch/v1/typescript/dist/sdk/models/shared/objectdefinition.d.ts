import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectOptions } from "./objectoptions";
import { PropertyDefinition } from "./propertydefinition";
/**
 * The definition for an object within a data source.
**/
export declare class ObjectDefinition extends SpeakeasyBase {
    name?: string;
    options?: ObjectOptions;
    propertyDefinitions?: PropertyDefinition[];
}
