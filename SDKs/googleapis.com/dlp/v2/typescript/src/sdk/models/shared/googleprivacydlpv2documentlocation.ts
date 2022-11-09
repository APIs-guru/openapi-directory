import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2DocumentLocation
/** 
 * Location of a finding within a document.
**/
export class GooglePrivacyDlpV2DocumentLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileOffset" })
  fileOffset?: string;
}
