import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Selection } from "./selection";



// SelectionList
/** 
 * Wrapper for SelectionList Field value.
**/
export class SelectionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: Selection })
  values?: Selection[];
}
