import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2StorageMetadataLabel
/** 
 * Storage metadata label to indicate which metadata entry contains findings.
**/
export class GooglePrivacyDlpV2StorageMetadataLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;
}
