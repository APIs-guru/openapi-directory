import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountReference16Ch } from "./accountreference16ch";
import { Balance } from "./balance";


// ReadAccountBalanceResponse200
/** 
 * Body of the response for a successful read balance for an account request.
**/
export class ReadAccountBalanceResponse200 extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: AccountReference16Ch;

  @Metadata({ data: "json, name=balances", elemType: shared.Balance })
  balances: Balance[];
}
