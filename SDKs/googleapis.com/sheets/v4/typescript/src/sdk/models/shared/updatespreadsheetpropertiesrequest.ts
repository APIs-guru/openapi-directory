import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpreadsheetProperties } from "./spreadsheetproperties";



// UpdateSpreadsheetPropertiesRequest
/** 
 * Updates properties of a spreadsheet.
**/
export class UpdateSpreadsheetPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: SpreadsheetProperties;
}
