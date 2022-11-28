import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryKey } from "./googleprivacydlpv2bigquerykey";
import { GooglePrivacyDlpV2DatastoreKey } from "./googleprivacydlpv2datastorekey";
/**
 * Message for a unique key indicating a record that contains a finding.
**/
export declare class GooglePrivacyDlpV2RecordKey extends SpeakeasyBase {
    bigQueryKey?: GooglePrivacyDlpV2BigQueryKey;
    datastoreKey?: GooglePrivacyDlpV2DatastoreKey;
    idValues?: string[];
}
