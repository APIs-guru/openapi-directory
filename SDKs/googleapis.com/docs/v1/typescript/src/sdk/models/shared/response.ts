import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateFooterResponse } from "./createfooterresponse";
import { CreateFootnoteResponse } from "./createfootnoteresponse";
import { CreateHeaderResponse } from "./createheaderresponse";
import { CreateNamedRangeResponse } from "./createnamedrangeresponse";
import { InsertInlineImageResponse } from "./insertinlineimageresponse";
import { InsertInlineSheetsChartResponse } from "./insertinlinesheetschartresponse";
import { ReplaceAllTextResponse } from "./replacealltextresponse";



// Response
/** 
 * A single response from an update.
**/
export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createFooter" })
  createFooter?: CreateFooterResponse;

  @SpeakeasyMetadata({ data: "json, name=createFootnote" })
  createFootnote?: CreateFootnoteResponse;

  @SpeakeasyMetadata({ data: "json, name=createHeader" })
  createHeader?: CreateHeaderResponse;

  @SpeakeasyMetadata({ data: "json, name=createNamedRange" })
  createNamedRange?: CreateNamedRangeResponse;

  @SpeakeasyMetadata({ data: "json, name=insertInlineImage" })
  insertInlineImage?: InsertInlineImageResponse;

  @SpeakeasyMetadata({ data: "json, name=insertInlineSheetsChart" })
  insertInlineSheetsChart?: InsertInlineSheetsChartResponse;

  @SpeakeasyMetadata({ data: "json, name=replaceAllText" })
  replaceAllText?: ReplaceAllTextResponse;
}
