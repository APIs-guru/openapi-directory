import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2CloudStoragePath
/** 
 * Message representing a single file or path in Cloud Storage.
**/
export class GooglePrivacyDlpV2CloudStoragePath extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;
}
