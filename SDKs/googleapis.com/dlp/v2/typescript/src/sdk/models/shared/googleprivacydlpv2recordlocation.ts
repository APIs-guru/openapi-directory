import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2RecordKey } from "./googleprivacydlpv2recordkey";
import { GooglePrivacyDlpV2TableLocation } from "./googleprivacydlpv2tablelocation";


// GooglePrivacyDlpV2RecordLocation
/** 
 * Location of a finding within a row or record.
**/
export class GooglePrivacyDlpV2RecordLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldId" })
  fieldId?: GooglePrivacyDlpV2FieldId;

  @Metadata({ data: "json, name=recordKey" })
  recordKey?: GooglePrivacyDlpV2RecordKey;

  @Metadata({ data: "json, name=tableLocation" })
  tableLocation?: GooglePrivacyDlpV2TableLocation;
}
