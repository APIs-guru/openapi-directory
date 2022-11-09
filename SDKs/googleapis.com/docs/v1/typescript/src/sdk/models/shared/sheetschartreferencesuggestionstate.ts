import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SheetsChartReferenceSuggestionState
/** 
 * A mask that indicates which of the fields on the base SheetsChartReference have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class SheetsChartReferenceSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartIdSuggested" })
  chartIdSuggested?: boolean;

  @Metadata({ data: "json, name=spreadsheetIdSuggested" })
  spreadsheetIdSuggested?: boolean;
}
