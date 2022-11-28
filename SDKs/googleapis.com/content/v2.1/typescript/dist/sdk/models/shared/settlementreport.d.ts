import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 *  Settlement reports detail order-level and item-level credits and debits between you and Google.
**/
export declare class SettlementReport extends SpeakeasyBase {
    endDate?: string;
    kind?: string;
    previousBalance?: Price;
    settlementId?: string;
    startDate?: string;
    transferAmount?: Price;
    transferDate?: string;
    transferIds?: string[];
}
