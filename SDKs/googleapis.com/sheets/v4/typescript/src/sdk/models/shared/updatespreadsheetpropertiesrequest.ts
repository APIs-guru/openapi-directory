import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SpreadsheetProperties } from "./spreadsheetproperties";


// UpdateSpreadsheetPropertiesRequest
/** 
 * Updates properties of a spreadsheet.
**/
export class UpdateSpreadsheetPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: SpreadsheetProperties;
}
