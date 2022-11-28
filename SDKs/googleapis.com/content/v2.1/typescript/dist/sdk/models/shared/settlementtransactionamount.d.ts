import { SpeakeasyBase } from "../../../internal/utils";
import { SettlementTransactionAmountCommission } from "./settlementtransactionamountcommission";
import { Price } from "./price";
export declare class SettlementTransactionAmount extends SpeakeasyBase {
    commission?: SettlementTransactionAmountCommission;
    description?: string;
    transactionAmount?: Price;
    type?: string;
}
