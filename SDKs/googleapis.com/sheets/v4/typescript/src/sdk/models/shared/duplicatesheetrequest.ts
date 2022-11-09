import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DuplicateSheetRequest
/** 
 * Duplicates the contents of a sheet.
**/
export class DuplicateSheetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=insertSheetIndex" })
  insertSheetIndex?: number;

  @Metadata({ data: "json, name=newSheetId" })
  newSheetId?: number;

  @Metadata({ data: "json, name=newSheetName" })
  newSheetName?: string;

  @Metadata({ data: "json, name=sourceSheetId" })
  sourceSheetId?: number;
}
