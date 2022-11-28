import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRe2 } from "./googlere2";
/**
 * A regex matcher designed for safety when used with untrusted input.
**/
export declare class RegexMatcher extends SpeakeasyBase {
    googleRe2?: GoogleRe2;
    regex?: string;
}
