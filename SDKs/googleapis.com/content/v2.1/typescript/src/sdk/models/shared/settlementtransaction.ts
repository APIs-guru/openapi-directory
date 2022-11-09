import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SettlementTransactionAmount } from "./settlementtransactionamount";
import { SettlementTransactionIdentifiers } from "./settlementtransactionidentifiers";
import { SettlementTransactionTransaction } from "./settlementtransactiontransaction";


// SettlementTransaction
/** 
 * Settlement transactions give a detailed breakdown of the settlement report.
**/
export class SettlementTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: SettlementTransactionAmount;

  @Metadata({ data: "json, name=identifiers" })
  identifiers?: SettlementTransactionIdentifiers;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: SettlementTransactionTransaction;
}
