import { SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";
/**
 * Replaces all instances of text matching a criteria with replace text.
**/
export declare class ReplaceAllTextRequest extends SpeakeasyBase {
    containsText?: SubstringMatchCriteria;
    replaceText?: string;
}
