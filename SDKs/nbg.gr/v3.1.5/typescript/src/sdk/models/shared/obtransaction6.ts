import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObTransactionCashBalance } from "./obtransactioncashbalance";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObCashAccount6 } from "./obcashaccount6";
import { ProprietaryBankTransactionCodeStructure1 } from "./proprietarybanktransactioncodestructure1";
import { ObEntryStatus1CodeEnum } from "./obentrystatus1codeenum";



// ObTransaction6
/** 
 * Provides further details on an entry in the report.
**/
export class ObTransaction6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=Balance" })
  balance?: ObTransactionCashBalance;

  @SpeakeasyMetadata({ data: "json, name=BookingDateTime" })
  bookingDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount6;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObCashAccount6;

  @SpeakeasyMetadata({ data: "json, name=ProprietaryBankTransactionCode" })
  proprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObEntryStatus1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=TransactionInformation" })
  transactionInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionReference" })
  transactionReference?: string;

  @SpeakeasyMetadata({ data: "json, name=ValueDateTime" })
  valueDateTime?: Date;
}
