import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SheetProperties } from "./sheetproperties";


// UpdateSheetPropertiesRequest
/** 
 * Updates properties of the sheet with the specified sheetId.
**/
export class UpdateSheetPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: SheetProperties;
}
