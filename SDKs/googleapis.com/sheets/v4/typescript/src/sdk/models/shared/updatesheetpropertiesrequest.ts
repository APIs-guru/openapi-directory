import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SheetProperties } from "./sheetproperties";



// UpdateSheetPropertiesRequest
/** 
 * Updates properties of the sheet with the specified sheetId.
**/
export class UpdateSheetPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: SheetProperties;
}
