import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";



// ReplaceAllTextRequest
/** 
 * Replaces all instances of text matching a criteria with replace text.
**/
export class ReplaceAllTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containsText" })
  containsText?: SubstringMatchCriteria;

  @SpeakeasyMetadata({ data: "json, name=replaceText" })
  replaceText?: string;
}
