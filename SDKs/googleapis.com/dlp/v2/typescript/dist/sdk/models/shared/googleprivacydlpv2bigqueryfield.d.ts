import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
/**
 * Message defining a field of a BigQuery table.
**/
export declare class GooglePrivacyDlpV2BigQueryField extends SpeakeasyBase {
    field?: GooglePrivacyDlpV2FieldId;
    table?: GooglePrivacyDlpV2BigQueryTable;
}
