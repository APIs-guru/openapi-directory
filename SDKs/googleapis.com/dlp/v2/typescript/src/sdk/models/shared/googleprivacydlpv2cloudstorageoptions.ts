import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FileSet } from "./googleprivacydlpv2fileset";

export enum GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED"
,    BinaryFile = "BINARY_FILE"
,    TextFile = "TEXT_FILE"
,    Image = "IMAGE"
,    Word = "WORD"
,    Pdf = "PDF"
,    Avro = "AVRO"
,    Csv = "CSV"
,    Tsv = "TSV"
,    Powerpoint = "POWERPOINT"
,    Excel = "EXCEL"
}

export enum GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum {
    SampleMethodUnspecified = "SAMPLE_METHOD_UNSPECIFIED"
,    Top = "TOP"
,    RandomStart = "RANDOM_START"
}


// GooglePrivacyDlpV2CloudStorageOptions
/** 
 * Options defining a file or a set of files within a Cloud Storage bucket.
**/
export class GooglePrivacyDlpV2CloudStorageOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=bytesLimitPerFile" })
  bytesLimitPerFile?: string;

  @Metadata({ data: "json, name=bytesLimitPerFilePercent" })
  bytesLimitPerFilePercent?: number;

  @Metadata({ data: "json, name=fileSet" })
  fileSet?: GooglePrivacyDlpV2FileSet;

  @Metadata({ data: "json, name=fileTypes" })
  fileTypes?: GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum[];

  @Metadata({ data: "json, name=filesLimitPercent" })
  filesLimitPercent?: number;

  @Metadata({ data: "json, name=sampleMethod" })
  sampleMethod?: GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum;
}
