import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { AccountReference16Ch } from "./accountreference16ch";
import { Balance } from "./balance";
import { AccountReport } from "./accountreport";


// TransactionsResponse200Json
/** 
 * Body of the JSON response for a successful read transaction list request.
 * This account report contains transactions resulting from the query parameters.
 * 
**/
export class TransactionsResponse200Json extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=account" })
  account?: AccountReference16Ch;

  @Metadata({ data: "json, name=balances", elemType: shared.Balance })
  balances?: Balance[];

  @Metadata({ data: "json, name=transactions" })
  transactions?: AccountReport;
}
