import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObTransactionCashBalance } from "./obtransactioncashbalance";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObCashAccount6 } from "./obcashaccount6";
import { ProprietaryBankTransactionCodeStructure1 } from "./proprietarybanktransactioncodestructure1";
import { ObEntryStatus1CodeEnum } from "./obentrystatus1codeenum";
/**
 * Provides further details on an entry in the report.
**/
export declare class ObTransaction6 extends SpeakeasyBase {
    accountId: string;
    amount: ObActiveOrHistoricCurrencyAndAmount;
    balance?: ObTransactionCashBalance;
    bookingDateTime: Date;
    creditDebitIndicator: ObCreditDebitCodeEnum;
    creditorAccount?: ObCashAccount6;
    debtorAccount?: ObCashAccount6;
    proprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;
    status: ObEntryStatus1CodeEnum;
    transactionInformation?: string;
    transactionReference?: string;
    valueDateTime?: Date;
}
