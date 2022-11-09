import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";


// FindReplaceRequest
/** 
 * Finds and replaces data in cells over a range, sheet, or all sheets.
**/
export class FindReplaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allSheets" })
  allSheets?: boolean;

  @Metadata({ data: "json, name=find" })
  find?: string;

  @Metadata({ data: "json, name=includeFormulas" })
  includeFormulas?: boolean;

  @Metadata({ data: "json, name=matchCase" })
  matchCase?: boolean;

  @Metadata({ data: "json, name=matchEntireCell" })
  matchEntireCell?: boolean;

  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=replacement" })
  replacement?: string;

  @Metadata({ data: "json, name=searchByRegex" })
  searchByRegex?: boolean;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
