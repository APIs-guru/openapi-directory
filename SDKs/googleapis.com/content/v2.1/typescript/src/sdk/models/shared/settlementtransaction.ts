import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettlementTransactionAmount } from "./settlementtransactionamount";
import { SettlementTransactionIdentifiers } from "./settlementtransactionidentifiers";
import { SettlementTransactionTransaction } from "./settlementtransactiontransaction";



// SettlementTransaction
/** 
 * Settlement transactions give a detailed breakdown of the settlement report.
**/
export class SettlementTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: SettlementTransactionAmount;

  @SpeakeasyMetadata({ data: "json, name=identifiers" })
  identifiers?: SettlementTransactionIdentifiers;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: SettlementTransactionTransaction;
}
