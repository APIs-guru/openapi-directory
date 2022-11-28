import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2DocumentLocation
/** 
 * Location of a finding within a document.
**/
export class GooglePrivacyDlpV2DocumentLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileOffset" })
  fileOffset?: string;
}
