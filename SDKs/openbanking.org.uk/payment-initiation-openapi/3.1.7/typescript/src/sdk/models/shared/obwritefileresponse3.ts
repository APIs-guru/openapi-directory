import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { Links } from "./links";
import { Meta } from "./meta";


// ObWriteFileResponse3DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteFileResponse3DataCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObWriteFileResponse3DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteFileResponse3DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteFileResponse3DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteFileResponse3DataInitiationRemittanceInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteFileResponse3DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
export class ObWriteFileResponse3DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlSum" })
  controlSum?: number;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteFileResponse3DataInitiationDebtorAccount;

  @Metadata({ data: "json, name=FileHash" })
  fileHash: string;

  @Metadata({ data: "json, name=FileReference" })
  fileReference?: string;

  @Metadata({ data: "json, name=FileType" })
  fileType: string;

  @Metadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @Metadata({ data: "json, name=NumberOfTransactions" })
  numberOfTransactions?: string;

  @Metadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteFileResponse3DataInitiationRemittanceInformation;

  @Metadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime?: Date;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteFileResponse3DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised"
,    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation"
,    Rejected = "Rejected"
}


// ObWriteFileResponse3DataMultiAuthorisation
/** 
 * The multiple authorisation flow response from the ASPSP.
**/
export class ObWriteFileResponse3DataMultiAuthorisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @Metadata({ data: "json, name=LastUpdateDateTime" })
  lastUpdateDateTime?: Date;

  @Metadata({ data: "json, name=NumberReceived" })
  numberReceived?: number;

  @Metadata({ data: "json, name=NumberRequired" })
  numberRequired?: number;

  @Metadata({ data: "json, name=Status" })
  status: ObWriteFileResponse3DataMultiAuthorisationStatusEnum;
}

export enum ObWriteFileResponse3DataStatusEnum {
    InitiationCompleted = "InitiationCompleted"
,    InitiationFailed = "InitiationFailed"
,    InitiationPending = "InitiationPending"
}


export class ObWriteFileResponse3Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Charges", elemType: shared.ObWriteFileResponse3DataCharges })
  charges?: ObWriteFileResponse3DataCharges[];

  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @Metadata({ data: "json, name=FilePaymentId" })
  filePaymentId: string;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteFileResponse3DataInitiation;

  @Metadata({ data: "json, name=MultiAuthorisation" })
  multiAuthorisation?: ObWriteFileResponse3DataMultiAuthorisation;

  @Metadata({ data: "json, name=Status" })
  status: ObWriteFileResponse3DataStatusEnum;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteFileResponse3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteFileResponse3Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
