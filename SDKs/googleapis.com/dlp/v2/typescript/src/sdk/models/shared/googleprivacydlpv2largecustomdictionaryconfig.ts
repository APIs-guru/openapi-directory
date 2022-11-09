import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2BigQueryField } from "./googleprivacydlpv2bigqueryfield";
import { GooglePrivacyDlpV2CloudStorageFileSet } from "./googleprivacydlpv2cloudstoragefileset";
import { GooglePrivacyDlpV2CloudStoragePath } from "./googleprivacydlpv2cloudstoragepath";


// GooglePrivacyDlpV2LargeCustomDictionaryConfig
/** 
 * Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
**/
export class GooglePrivacyDlpV2LargeCustomDictionaryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQueryField" })
  bigQueryField?: GooglePrivacyDlpV2BigQueryField;

  @Metadata({ data: "json, name=cloudStorageFileSet" })
  cloudStorageFileSet?: GooglePrivacyDlpV2CloudStorageFileSet;

  @Metadata({ data: "json, name=outputPath" })
  outputPath?: GooglePrivacyDlpV2CloudStoragePath;
}
