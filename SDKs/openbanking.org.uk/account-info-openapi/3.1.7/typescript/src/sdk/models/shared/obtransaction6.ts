import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=AddressLine" })
  addressLine?: string;

  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount9;

  @Metadata({ data: "json, name=Balance" })
  balance?: ObTransactionCashBalance;

  @Metadata({ data: "json, name=BankTransactionCode" })
  bankTransactionCode?: ObBankTransactionCodeStructure1;

  @Metadata({ data: "json, name=BookingDateTime" })
  bookingDateTime: Date;

  @Metadata({ data: "json, name=CardInstrument" })
  cardInstrument?: ObTransactionCardInstrument1;

  @Metadata({ data: "json, name=ChargeAmount" })
  chargeAmount?: ObActiveOrHistoricCurrencyAndAmount10;

  @Metadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode1Enum;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount60;

  @Metadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObBranchAndFinancialInstitutionIdentification61;

  @Metadata({ data: "json, name=CurrencyExchange" })
  currencyExchange?: ObCurrencyExchange5;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObCashAccount61;

  @Metadata({ data: "json, name=DebtorAgent" })
  debtorAgent?: ObBranchAndFinancialInstitutionIdentification62;

  @Metadata({ data: "json, name=MerchantDetails" })
  merchantDetails?: ObMerchantDetails1;

  @Metadata({ data: "json, name=ProprietaryBankTransactionCode" })
  proprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;

  @Metadata({ data: "json, name=StatementReference" })
  statementReference?: string[];

  @Metadata({ data: "json, name=Status" })
  status: ObEntryStatus1CodeEnum;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;

  @Metadata({ data: "json, name=TransactionId" })
  transactionId?: string;

  @Metadata({ data: "json, name=TransactionInformation" })
  transactionInformation?: string;

  @Metadata({ data: "json, name=TransactionMutability" })
  transactionMutability?: ObTransactionMutability1CodeEnum;

  @Metadata({ data: "json, name=TransactionReference" })
  transactionReference?: string;

  @Metadata({ data: "json, name=ValueDateTime" })
  valueDateTime?: Date;
}
