import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ValueMatcher } from "./valuematcher";


// ListMatcher
/** 
 * Specifies the way to match a list value.
**/
export class ListMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=oneOf" })
  oneOf?: ValueMatcher;
}
