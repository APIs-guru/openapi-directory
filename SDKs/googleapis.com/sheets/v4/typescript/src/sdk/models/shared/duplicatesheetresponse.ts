import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SheetProperties } from "./sheetproperties";


// DuplicateSheetResponse
/** 
 * The result of duplicating a sheet.
**/
export class DuplicateSheetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: SheetProperties;
}
