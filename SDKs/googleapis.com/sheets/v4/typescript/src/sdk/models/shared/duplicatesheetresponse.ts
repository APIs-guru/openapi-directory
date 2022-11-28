import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SheetProperties } from "./sheetproperties";



// DuplicateSheetResponse
/** 
 * The result of duplicating a sheet.
**/
export class DuplicateSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: SheetProperties;
}
