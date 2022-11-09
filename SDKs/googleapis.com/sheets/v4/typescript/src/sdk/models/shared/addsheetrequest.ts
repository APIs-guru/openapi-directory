import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SheetProperties } from "./sheetproperties";


// AddSheetRequest
/** 
 * Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.
**/
export class AddSheetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: SheetProperties;
}
