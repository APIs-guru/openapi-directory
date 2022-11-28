import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObWriteFile2DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteFile2DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteFile2DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteFile2DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteFile2DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
export class ObWriteFile2DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlSum" })
  controlSum?: number;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteFile2DataInitiationDebtorAccount;

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
  remittanceInformation?: ObWriteFile2DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteFile2Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteFile2DataInitiation;
}


export class ObWriteFile2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteFile2Data;
}
