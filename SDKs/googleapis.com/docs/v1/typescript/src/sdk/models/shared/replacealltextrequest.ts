import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";


// ReplaceAllTextRequest
/** 
 * Replaces all instances of text matching a criteria with replace text.
**/
export class ReplaceAllTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=containsText" })
  containsText?: SubstringMatchCriteria;

  @Metadata({ data: "json, name=replaceText" })
  replaceText?: string;
}
