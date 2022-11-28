import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount9 } from "./obactiveorhistoriccurrencyandamount9";
import { ObTransactionCashBalance } from "./obtransactioncashbalance";
import { ObBankTransactionCodeStructure1 } from "./obbanktransactioncodestructure1";
import { ObTransactionCardInstrument1 } from "./obtransactioncardinstrument1";
import { ObActiveOrHistoricCurrencyAndAmount10 } from "./obactiveorhistoriccurrencyandamount10";
import { ObCreditDebitCode1Enum } from "./obcreditdebitcode1enum";
import { ObCashAccount60 } from "./obcashaccount60";
import { ObBranchAndFinancialInstitutionIdentification61 } from "./obbranchandfinancialinstitutionidentification61";
import { ObCurrencyExchange5 } from "./obcurrencyexchange5";
import { ObCashAccount61 } from "./obcashaccount61";
import { ObBranchAndFinancialInstitutionIdentification62 } from "./obbranchandfinancialinstitutionidentification62";
import { ObMerchantDetails1 } from "./obmerchantdetails1";
import { ProprietaryBankTransactionCodeStructure1 } from "./proprietarybanktransactioncodestructure1";
import { ObEntryStatus1CodeEnum } from "./obentrystatus1codeenum";
import { ObTransactionMutability1CodeEnum } from "./obtransactionmutability1codeenum";



// ObTransaction6
/** 
 * Provides further details on an entry in the report.
**/
export class ObTransaction6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=AddressLine" })
  addressLine?: string;

  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount9;

  @SpeakeasyMetadata({ data: "json, name=Balance" })
  balance?: ObTransactionCashBalance;

  @SpeakeasyMetadata({ data: "json, name=BankTransactionCode" })
  bankTransactionCode?: ObBankTransactionCodeStructure1;

  @SpeakeasyMetadata({ data: "json, name=BookingDateTime" })
  bookingDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=CardInstrument" })
  cardInstrument?: ObTransactionCardInstrument1;

  @SpeakeasyMetadata({ data: "json, name=ChargeAmount" })
  chargeAmount?: ObActiveOrHistoricCurrencyAndAmount10;

  @SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode1Enum;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount60;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObBranchAndFinancialInstitutionIdentification61;

  @SpeakeasyMetadata({ data: "json, name=CurrencyExchange" })
  currencyExchange?: ObCurrencyExchange5;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObCashAccount61;

  @SpeakeasyMetadata({ data: "json, name=DebtorAgent" })
  debtorAgent?: ObBranchAndFinancialInstitutionIdentification62;

  @SpeakeasyMetadata({ data: "json, name=MerchantDetails" })
  merchantDetails?: ObMerchantDetails1;

  @SpeakeasyMetadata({ data: "json, name=ProprietaryBankTransactionCode" })
  proprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;

  @SpeakeasyMetadata({ data: "json, name=StatementReference" })
  statementReference?: string[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObEntryStatus1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=TransactionId" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionInformation" })
  transactionInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionMutability" })
  transactionMutability?: ObTransactionMutability1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=TransactionReference" })
  transactionReference?: string;

  @SpeakeasyMetadata({ data: "json, name=ValueDateTime" })
  valueDateTime?: Date;
}
