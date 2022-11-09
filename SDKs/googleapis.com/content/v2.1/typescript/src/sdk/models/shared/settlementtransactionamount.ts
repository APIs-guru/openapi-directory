import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SettlementTransactionAmountCommission } from "./settlementtransactionamountcommission";
import { Price } from "./price";


export class SettlementTransactionAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=commission" })
  commission?: SettlementTransactionAmountCommission;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=transactionAmount" })
  transactionAmount?: Price;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
