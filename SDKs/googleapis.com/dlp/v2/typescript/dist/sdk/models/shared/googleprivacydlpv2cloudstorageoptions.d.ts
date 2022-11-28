import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FileSet } from "./googleprivacydlpv2fileset";
export declare enum GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED",
    BinaryFile = "BINARY_FILE",
    TextFile = "TEXT_FILE",
    Image = "IMAGE",
    Word = "WORD",
    Pdf = "PDF",
    Avro = "AVRO",
    Csv = "CSV",
    Tsv = "TSV",
    Powerpoint = "POWERPOINT",
    Excel = "EXCEL"
}
export declare enum GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum {
    SampleMethodUnspecified = "SAMPLE_METHOD_UNSPECIFIED",
    Top = "TOP",
    RandomStart = "RANDOM_START"
}
/**
 * Options defining a file or a set of files within a Cloud Storage bucket.
**/
export declare class GooglePrivacyDlpV2CloudStorageOptions extends SpeakeasyBase {
    bytesLimitPerFile?: string;
    bytesLimitPerFilePercent?: number;
    fileSet?: GooglePrivacyDlpV2FileSet;
    fileTypes?: GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum[];
    filesLimitPercent?: number;
    sampleMethod?: GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum;
}
