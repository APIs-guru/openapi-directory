import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryField } from "./googleprivacydlpv2bigqueryfield";
import { GooglePrivacyDlpV2CloudStorageFileSet } from "./googleprivacydlpv2cloudstoragefileset";
import { GooglePrivacyDlpV2CloudStoragePath } from "./googleprivacydlpv2cloudstoragepath";
/**
 * Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
**/
export declare class GooglePrivacyDlpV2LargeCustomDictionaryConfig extends SpeakeasyBase {
    bigQueryField?: GooglePrivacyDlpV2BigQueryField;
    cloudStorageFileSet?: GooglePrivacyDlpV2CloudStorageFileSet;
    outputPath?: GooglePrivacyDlpV2CloudStoragePath;
}
