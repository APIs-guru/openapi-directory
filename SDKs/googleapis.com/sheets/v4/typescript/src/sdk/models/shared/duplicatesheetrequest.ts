import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DuplicateSheetRequest
/** 
 * Duplicates the contents of a sheet.
**/
export class DuplicateSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insertSheetIndex" })
  insertSheetIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=newSheetId" })
  newSheetId?: number;

  @SpeakeasyMetadata({ data: "json, name=newSheetName" })
  newSheetName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceSheetId" })
  sourceSheetId?: number;
}
