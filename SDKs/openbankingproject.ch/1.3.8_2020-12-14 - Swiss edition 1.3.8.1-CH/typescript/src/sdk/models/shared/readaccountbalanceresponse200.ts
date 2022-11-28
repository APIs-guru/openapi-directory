import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { Balance } from "./balance";



// ReadAccountBalanceResponse200
/** 
 * Body of the response for a successful read balance for an account request.
**/
export class ReadAccountBalanceResponse200 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: AccountReference16Ch;

  @SpeakeasyMetadata({ data: "json, name=balances", elemType: Balance })
  balances: Balance[];
}
