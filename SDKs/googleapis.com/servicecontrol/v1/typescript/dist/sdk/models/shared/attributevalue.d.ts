import { SpeakeasyBase } from "../../../internal/utils";
import { TruncatableString } from "./truncatablestring";
/**
 * The allowed types for [VALUE] in a `[KEY]:[VALUE]` attribute.
**/
export declare class AttributeValue extends SpeakeasyBase {
    boolValue?: boolean;
    intValue?: string;
    stringValue?: TruncatableString;
}
