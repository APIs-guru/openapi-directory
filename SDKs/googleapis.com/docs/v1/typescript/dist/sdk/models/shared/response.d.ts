import { SpeakeasyBase } from "../../../internal/utils";
import { CreateFooterResponse } from "./createfooterresponse";
import { CreateFootnoteResponse } from "./createfootnoteresponse";
import { CreateHeaderResponse } from "./createheaderresponse";
import { CreateNamedRangeResponse } from "./createnamedrangeresponse";
import { InsertInlineImageResponse } from "./insertinlineimageresponse";
import { InsertInlineSheetsChartResponse } from "./insertinlinesheetschartresponse";
import { ReplaceAllTextResponse } from "./replacealltextresponse";
/**
 * A single response from an update.
**/
export declare class Response extends SpeakeasyBase {
    createFooter?: CreateFooterResponse;
    createFootnote?: CreateFootnoteResponse;
    createHeader?: CreateHeaderResponse;
    createNamedRange?: CreateNamedRangeResponse;
    insertInlineImage?: InsertInlineImageResponse;
    insertInlineSheetsChart?: InsertInlineSheetsChartResponse;
    replaceAllText?: ReplaceAllTextResponse;
}
