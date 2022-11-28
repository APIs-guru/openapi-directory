import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * A set of attributes, each in the format `[KEY]:[VALUE]`.
**/
export declare class Attributes extends SpeakeasyBase {
    attributeMap?: Map<string, AttributeValue>;
    droppedAttributesCount?: number;
}
