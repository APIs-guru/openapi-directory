import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TableRowStyleSuggestionState
/** 
 * A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class TableRowStyleSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=minRowHeightSuggested" })
  minRowHeightSuggested?: boolean;
}
