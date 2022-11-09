import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObTransactionCashBalance } from "./obtransactioncashbalance";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObCashAccount6 } from "./obcashaccount6";
import { ObCashAccount6 } from "./obcashaccount6";
import { ProprietaryBankTransactionCodeStructure1 } from "./proprietarybanktransactioncodestructure1";
import { ObEntryStatus1CodeEnum } from "./obentrystatus1codeenum";


// ObTransaction6
/** 
 * Provides further details on an entry in the report.
**/
export class ObTransaction6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=Balance" })
  balance?: ObTransactionCashBalance;

  @Metadata({ data: "json, name=BookingDateTime" })
  bookingDateTime: Date;

  @Metadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCodeEnum;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount6;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObCashAccount6;

  @Metadata({ data: "json, name=ProprietaryBankTransactionCode" })
  proprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;

  @Metadata({ data: "json, name=Status" })
  status: ObEntryStatus1CodeEnum;

  @Metadata({ data: "json, name=TransactionInformation" })
  transactionInformation?: string;

  @Metadata({ data: "json, name=TransactionReference" })
  transactionReference?: string;

  @Metadata({ data: "json, name=ValueDateTime" })
  valueDateTime?: Date;
}
