import { SpeakeasyBase } from "../../../internal/utils";
import { ValueMatcher } from "./valuematcher";
/**
 * Specifies the way to match a list value.
**/
export declare class ListMatcher extends SpeakeasyBase {
    oneOf?: ValueMatcher;
}
