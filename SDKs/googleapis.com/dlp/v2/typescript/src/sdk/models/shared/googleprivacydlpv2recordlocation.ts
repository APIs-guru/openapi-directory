import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2RecordKey } from "./googleprivacydlpv2recordkey";
import { GooglePrivacyDlpV2TableLocation } from "./googleprivacydlpv2tablelocation";



// GooglePrivacyDlpV2RecordLocation
/** 
 * Location of a finding within a row or record.
**/
export class GooglePrivacyDlpV2RecordLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: GooglePrivacyDlpV2FieldId;

  @SpeakeasyMetadata({ data: "json, name=recordKey" })
  recordKey?: GooglePrivacyDlpV2RecordKey;

  @SpeakeasyMetadata({ data: "json, name=tableLocation" })
  tableLocation?: GooglePrivacyDlpV2TableLocation;
}
