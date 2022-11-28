import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
/**
 * Row key for identifying a record in BigQuery table.
**/
export declare class GooglePrivacyDlpV2BigQueryKey extends SpeakeasyBase {
    rowNumber?: string;
    tableReference?: GooglePrivacyDlpV2BigQueryTable;
}
