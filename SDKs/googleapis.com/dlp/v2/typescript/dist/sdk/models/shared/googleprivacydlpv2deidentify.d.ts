import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2TransformationConfig } from "./googleprivacydlpv2transformationconfig";
import { GooglePrivacyDlpV2TransformationDetailsStorageConfig } from "./googleprivacydlpv2transformationdetailsstorageconfig";
export declare enum GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum {
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
/**
 * Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect
**/
export declare class GooglePrivacyDlpV2Deidentify extends SpeakeasyBase {
    cloudStorageOutput?: string;
    fileTypesToTransform?: GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum[];
    transformationConfig?: GooglePrivacyDlpV2TransformationConfig;
    transformationDetailsStorageConfig?: GooglePrivacyDlpV2TransformationDetailsStorageConfig;
}
