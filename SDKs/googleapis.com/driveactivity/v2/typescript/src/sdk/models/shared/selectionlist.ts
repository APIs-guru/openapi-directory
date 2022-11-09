import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Selection } from "./selection";


// SelectionList
/** 
 * Wrapper for SelectionList Field value.
**/
export class SelectionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.Selection })
  values?: Selection[];
}
