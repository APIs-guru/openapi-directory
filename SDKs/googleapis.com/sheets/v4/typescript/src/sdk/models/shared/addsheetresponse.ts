import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SheetProperties } from "./sheetproperties";


// AddSheetResponse
/** 
 * The result of adding a sheet.
**/
export class AddSheetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: SheetProperties;
}
