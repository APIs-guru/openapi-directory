import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObRisk1 } from "./obrisk1";



// ObWriteInternational3DataInitiationCreditor
/** 
 * Party to which an amount of money is due.
**/
export class ObWriteInternational3DataInitiationCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


// ObWriteInternational3DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteInternational3DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternational3DataInitiationCreditorAgent
/** 
 * Financial institution servicing an account for the creditor.
**/
export class ObWriteInternational3DataInitiationCreditorAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternational3DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteInternational3DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}

export enum ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}


// ObWriteInternational3DataInitiationExchangeRateInformation
/** 
 * Provides details on the currency exchange rate and contract.
**/
export class ObWriteInternational3DataInitiationExchangeRateInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType: ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternational3DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteInternational3DataInitiationInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObWriteInternational3DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}


// ObWriteInternational3DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteInternational3DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteInternational3DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
export class ObWriteInternational3DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer?: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternational3DataInitiationCreditor;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteInternational3DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObWriteInternational3DataInitiationCreditorAgent;

  @SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" })
  currencyOfTransfer: string;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteInternational3DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" })
  destinationCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternational3DataInitiationExchangeRateInformation;

  @SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" })
  extendedPurpose?: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteInternational3DataInitiationInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=InstructionPriority" })
  instructionPriority?: ObWriteInternational3DataInitiationInstructionPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=Purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteInternational3DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteInternational3Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteInternational3DataInitiation;
}


export class ObWriteInternational3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteInternational3Data;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
