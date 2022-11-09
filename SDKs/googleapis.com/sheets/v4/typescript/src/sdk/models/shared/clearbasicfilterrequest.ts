import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClearBasicFilterRequest
/** 
 * Clears the basic filter, if any exists on the sheet.
**/
export class ClearBasicFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
