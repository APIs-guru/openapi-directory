import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObscaSupportData1 } from "./obscasupportdata1";


export enum ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}


// ObWriteFileConsent3DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteFileConsent3DataAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteFileConsent3DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteFileConsent3DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteFileConsent3DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteFileConsent3DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteFileConsent3DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
export class ObWriteFileConsent3DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlSum" })
  controlSum?: number;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteFileConsent3DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=FileHash" })
  fileHash: string;

  @SpeakeasyMetadata({ data: "json, name=FileReference" })
  fileReference?: string;

  @SpeakeasyMetadata({ data: "json, name=FileType" })
  fileType: string;

  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfTransactions" })
  numberOfTransactions?: string;

  @SpeakeasyMetadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteFileConsent3DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteFileConsent3Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteFileConsent3DataAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteFileConsent3DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;
}


export class ObWriteFileConsent3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteFileConsent3Data;
}
