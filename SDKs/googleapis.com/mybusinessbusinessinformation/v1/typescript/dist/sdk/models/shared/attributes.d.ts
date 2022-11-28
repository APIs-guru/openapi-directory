import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeInput } from "./attribute";
import { Attribute } from "./attribute";
/**
 * A container for all the attributes for a given location.
**/
export declare class AttributesInput extends SpeakeasyBase {
    attributes?: AttributeInput[];
    name?: string;
}
/**
 * A container for all the attributes for a given location.
**/
export declare class Attributes extends SpeakeasyBase {
    attributes?: Attribute[];
    name?: string;
}
