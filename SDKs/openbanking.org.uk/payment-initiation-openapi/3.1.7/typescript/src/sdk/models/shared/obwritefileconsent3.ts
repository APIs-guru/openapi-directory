import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObscaSupportData1 } from "./obscasupportdata1";

export enum ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum {
    Any = "Any"
,    Single = "Single"
}


// ObWriteFileConsent3DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteFileConsent3DataAuthorisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum;

  @Metadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteFileConsent3DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteFileConsent3DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteFileConsent3DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteFileConsent3DataInitiationRemittanceInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteFileConsent3DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
export class ObWriteFileConsent3DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlSum" })
  controlSum?: number;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteFileConsent3DataInitiationDebtorAccount;

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
  remittanceInformation?: ObWriteFileConsent3DataInitiationRemittanceInformation;

  @Metadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime?: Date;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteFileConsent3Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteFileConsent3DataAuthorisation;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteFileConsent3DataInitiation;

  @Metadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;
}


export class ObWriteFileConsent3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteFileConsent3Data;
}
