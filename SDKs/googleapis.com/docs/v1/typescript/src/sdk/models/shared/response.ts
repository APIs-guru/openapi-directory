import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=createFooter" })
  createFooter?: CreateFooterResponse;

  @Metadata({ data: "json, name=createFootnote" })
  createFootnote?: CreateFootnoteResponse;

  @Metadata({ data: "json, name=createHeader" })
  createHeader?: CreateHeaderResponse;

  @Metadata({ data: "json, name=createNamedRange" })
  createNamedRange?: CreateNamedRangeResponse;

  @Metadata({ data: "json, name=insertInlineImage" })
  insertInlineImage?: InsertInlineImageResponse;

  @Metadata({ data: "json, name=insertInlineSheetsChart" })
  insertInlineSheetsChart?: InsertInlineSheetsChartResponse;

  @Metadata({ data: "json, name=replaceAllText" })
  replaceAllText?: ReplaceAllTextResponse;
}
