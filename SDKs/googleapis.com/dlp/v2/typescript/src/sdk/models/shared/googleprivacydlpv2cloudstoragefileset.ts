import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2CloudStorageFileSet
/** 
 * Message representing a set of files in Cloud Storage.
**/
export class GooglePrivacyDlpV2CloudStorageFileSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
