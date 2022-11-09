import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteSheetRequest
/** 
 * Deletes the requested sheet.
**/
export class DeleteSheetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
