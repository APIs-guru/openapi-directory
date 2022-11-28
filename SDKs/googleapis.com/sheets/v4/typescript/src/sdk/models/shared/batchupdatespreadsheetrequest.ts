import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Request } from "./request";



// BatchUpdateSpreadsheetRequest
/** 
 * The request for updating any aspect of a spreadsheet.
**/
export class BatchUpdateSpreadsheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeSpreadsheetInResponse" })
  includeSpreadsheetInResponse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: Request })
  requests?: Request[];

  @SpeakeasyMetadata({ data: "json, name=responseIncludeGridData" })
  responseIncludeGridData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=responseRanges" })
  responseRanges?: string[];
}
