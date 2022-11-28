import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
export declare enum GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum {
    SampleMethodUnspecified = "SAMPLE_METHOD_UNSPECIFIED",
    Top = "TOP",
    RandomStart = "RANDOM_START"
}
/**
 * Options defining BigQuery table and row identifiers.
**/
export declare class GooglePrivacyDlpV2BigQueryOptions extends SpeakeasyBase {
    excludedFields?: GooglePrivacyDlpV2FieldId[];
    identifyingFields?: GooglePrivacyDlpV2FieldId[];
    includedFields?: GooglePrivacyDlpV2FieldId[];
    rowsLimit?: string;
    rowsLimitPercent?: number;
    sampleMethod?: GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum;
    tableReference?: GooglePrivacyDlpV2BigQueryTable;
}
