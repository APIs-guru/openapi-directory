import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { TruncatableString } from "./truncatablestring";
/**
 * Text annotation with a set of attributes.
**/
export declare class Annotation extends SpeakeasyBase {
    attributes?: Attributes;
    description?: TruncatableString;
}
