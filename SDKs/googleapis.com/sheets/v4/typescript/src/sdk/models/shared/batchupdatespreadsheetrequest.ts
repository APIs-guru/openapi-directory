import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Request } from "./request";


// BatchUpdateSpreadsheetRequest
/** 
 * The request for updating any aspect of a spreadsheet.
**/
export class BatchUpdateSpreadsheetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeSpreadsheetInResponse" })
  includeSpreadsheetInResponse?: boolean;

  @Metadata({ data: "json, name=requests", elemType: shared.Request })
  requests?: Request[];

  @Metadata({ data: "json, name=responseIncludeGridData" })
  responseIncludeGridData?: boolean;

  @Metadata({ data: "json, name=responseRanges" })
  responseRanges?: string[];
}
