import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Provides further details on an entry in the report.
**/
export declare class ObTransaction6 extends SpeakeasyBase {
    accountId: string;
    addressLine?: string;
    amount: ObActiveOrHistoricCurrencyAndAmount9;
    balance?: ObTransactionCashBalance;
    bankTransactionCode?: ObBankTransactionCodeStructure1;
    bookingDateTime: Date;
    cardInstrument?: ObTransactionCardInstrument1;
    chargeAmount?: ObActiveOrHistoricCurrencyAndAmount10;
    creditDebitIndicator: ObCreditDebitCode1Enum;
    creditorAccount?: ObCashAccount60;
    creditorAgent?: ObBranchAndFinancialInstitutionIdentification61;
    currencyExchange?: ObCurrencyExchange5;
    debtorAccount?: ObCashAccount61;
    debtorAgent?: ObBranchAndFinancialInstitutionIdentification62;
    merchantDetails?: ObMerchantDetails1;
    proprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;
    statementReference?: string[];
    status: ObEntryStatus1CodeEnum;
    supplementaryData?: Map<string, any>;
    transactionId?: string;
    transactionInformation?: string;
    transactionMutability?: ObTransactionMutability1CodeEnum;
    transactionReference?: string;
    valueDateTime?: Date;
}
