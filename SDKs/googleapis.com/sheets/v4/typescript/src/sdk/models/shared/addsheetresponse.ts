import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SheetProperties } from "./sheetproperties";



// AddSheetResponse
/** 
 * The result of adding a sheet.
**/
export class AddSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: SheetProperties;
}
