import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2TableLocation
/** 
 * Location of a finding within a table.
**/
export class GooglePrivacyDlpV2TableLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rowIndex" })
  rowIndex?: string;
}
