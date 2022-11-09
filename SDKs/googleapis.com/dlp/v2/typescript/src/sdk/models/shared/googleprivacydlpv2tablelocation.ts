import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2TableLocation
/** 
 * Location of a finding within a table.
**/
export class GooglePrivacyDlpV2TableLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=rowIndex" })
  rowIndex?: string;
}
