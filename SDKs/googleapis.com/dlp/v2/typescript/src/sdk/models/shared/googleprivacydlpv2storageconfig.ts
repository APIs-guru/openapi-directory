import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryOptions } from "./googleprivacydlpv2bigqueryoptions";
import { GooglePrivacyDlpV2CloudStorageOptions } from "./googleprivacydlpv2cloudstorageoptions";
import { GooglePrivacyDlpV2DatastoreOptions } from "./googleprivacydlpv2datastoreoptions";
import { GooglePrivacyDlpV2HybridOptions } from "./googleprivacydlpv2hybridoptions";
import { GooglePrivacyDlpV2TimespanConfig } from "./googleprivacydlpv2timespanconfig";



// GooglePrivacyDlpV2StorageConfig
/** 
 * Shared message indicating Cloud storage type.
**/
export class GooglePrivacyDlpV2StorageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQueryOptions" })
  bigQueryOptions?: GooglePrivacyDlpV2BigQueryOptions;

  @SpeakeasyMetadata({ data: "json, name=cloudStorageOptions" })
  cloudStorageOptions?: GooglePrivacyDlpV2CloudStorageOptions;

  @SpeakeasyMetadata({ data: "json, name=datastoreOptions" })
  datastoreOptions?: GooglePrivacyDlpV2DatastoreOptions;

  @SpeakeasyMetadata({ data: "json, name=hybridOptions" })
  hybridOptions?: GooglePrivacyDlpV2HybridOptions;

  @SpeakeasyMetadata({ data: "json, name=timespanConfig" })
  timespanConfig?: GooglePrivacyDlpV2TimespanConfig;
}
