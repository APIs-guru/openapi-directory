import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValueMatcher } from "./valuematcher";



// ListMatcher
/** 
 * Specifies the way to match a list value.
**/
export class ListMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oneOf" })
  oneOf?: ValueMatcher;
}
