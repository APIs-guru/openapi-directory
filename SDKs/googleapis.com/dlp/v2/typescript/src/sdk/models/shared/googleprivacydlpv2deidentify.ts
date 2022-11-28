import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2TransformationConfig } from "./googleprivacydlpv2transformationconfig";
import { GooglePrivacyDlpV2TransformationDetailsStorageConfig } from "./googleprivacydlpv2transformationdetailsstorageconfig";


export enum GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum {
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


// GooglePrivacyDlpV2Deidentify
/** 
 * Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect
**/
export class GooglePrivacyDlpV2Deidentify extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudStorageOutput" })
  cloudStorageOutput?: string;

  @SpeakeasyMetadata({ data: "json, name=fileTypesToTransform" })
  fileTypesToTransform?: GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum[];

  @SpeakeasyMetadata({ data: "json, name=transformationConfig" })
  transformationConfig?: GooglePrivacyDlpV2TransformationConfig;

  @SpeakeasyMetadata({ data: "json, name=transformationDetailsStorageConfig" })
  transformationDetailsStorageConfig?: GooglePrivacyDlpV2TransformationDetailsStorageConfig;
}
