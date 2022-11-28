import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";



// FindReplaceRequest
/** 
 * Finds and replaces data in cells over a range, sheet, or all sheets.
**/
export class FindReplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allSheets" })
  allSheets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=find" })
  find?: string;

  @SpeakeasyMetadata({ data: "json, name=includeFormulas" })
  includeFormulas?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchCase" })
  matchCase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchEntireCell" })
  matchEntireCell?: boolean;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=replacement" })
  replacement?: string;

  @SpeakeasyMetadata({ data: "json, name=searchByRegex" })
  searchByRegex?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
