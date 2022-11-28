import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2CloudStoragePath
/** 
 * Message representing a single file or path in Cloud Storage.
**/
export class GooglePrivacyDlpV2CloudStoragePath extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
