import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryOptions } from "./googleprivacydlpv2bigqueryoptions";
import { GooglePrivacyDlpV2CloudStorageOptions } from "./googleprivacydlpv2cloudstorageoptions";
import { GooglePrivacyDlpV2DatastoreOptions } from "./googleprivacydlpv2datastoreoptions";
import { GooglePrivacyDlpV2HybridOptions } from "./googleprivacydlpv2hybridoptions";
import { GooglePrivacyDlpV2TimespanConfig } from "./googleprivacydlpv2timespanconfig";
/**
 * Shared message indicating Cloud storage type.
**/
export declare class GooglePrivacyDlpV2StorageConfig extends SpeakeasyBase {
    bigQueryOptions?: GooglePrivacyDlpV2BigQueryOptions;
    cloudStorageOptions?: GooglePrivacyDlpV2CloudStorageOptions;
    datastoreOptions?: GooglePrivacyDlpV2DatastoreOptions;
    hybridOptions?: GooglePrivacyDlpV2HybridOptions;
    timespanConfig?: GooglePrivacyDlpV2TimespanConfig;
}
