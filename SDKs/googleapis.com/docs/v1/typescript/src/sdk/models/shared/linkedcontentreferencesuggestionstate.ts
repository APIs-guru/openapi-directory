import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SheetsChartReferenceSuggestionState } from "./sheetschartreferencesuggestionstate";


// LinkedContentReferenceSuggestionState
/** 
 * A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class LinkedContentReferenceSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=sheetsChartReferenceSuggestionState" })
  sheetsChartReferenceSuggestionState?: SheetsChartReferenceSuggestionState;
}
