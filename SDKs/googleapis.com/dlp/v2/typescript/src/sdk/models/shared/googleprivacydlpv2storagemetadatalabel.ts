import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2StorageMetadataLabel
/** 
 * Storage metadata label to indicate which metadata entry contains findings.
**/
export class GooglePrivacyDlpV2StorageMetadataLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
