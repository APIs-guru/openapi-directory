import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClearBasicFilterRequest
/** 
 * Clears the basic filter, if any exists on the sheet.
**/
export class ClearBasicFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
