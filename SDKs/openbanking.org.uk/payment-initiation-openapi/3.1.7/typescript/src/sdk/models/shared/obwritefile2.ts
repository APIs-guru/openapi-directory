import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObWriteFile2DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteFile2DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteFile2DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteFile2DataInitiationRemittanceInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteFile2DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
export class ObWriteFile2DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlSum" })
  controlSum?: number;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteFile2DataInitiationDebtorAccount;

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
  remittanceInformation?: ObWriteFile2DataInitiationRemittanceInformation;

  @Metadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime?: Date;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteFile2Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteFile2DataInitiation;
}


export class ObWriteFile2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteFile2Data;
}
