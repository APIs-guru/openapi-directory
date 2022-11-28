import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: AccountReference16Ch;

  @SpeakeasyMetadata({ data: "json, name=balances", elemType: Balance })
  balances?: Balance[];

  @SpeakeasyMetadata({ data: "json, name=transactions" })
  transactions?: AccountReport;
}
