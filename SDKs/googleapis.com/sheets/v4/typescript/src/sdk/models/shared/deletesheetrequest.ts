import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteSheetRequest
/** 
 * Deletes the requested sheet.
**/
export class DeleteSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
