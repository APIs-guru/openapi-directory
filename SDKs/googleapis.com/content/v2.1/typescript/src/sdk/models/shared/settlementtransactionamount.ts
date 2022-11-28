import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettlementTransactionAmountCommission } from "./settlementtransactionamountcommission";
import { Price } from "./price";



export class SettlementTransactionAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commission" })
  commission?: SettlementTransactionAmountCommission;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionAmount" })
  transactionAmount?: Price;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
