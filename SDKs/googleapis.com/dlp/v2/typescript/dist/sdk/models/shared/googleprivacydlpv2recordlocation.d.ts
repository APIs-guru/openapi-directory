import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2RecordKey } from "./googleprivacydlpv2recordkey";
import { GooglePrivacyDlpV2TableLocation } from "./googleprivacydlpv2tablelocation";
/**
 * Location of a finding within a row or record.
**/
export declare class GooglePrivacyDlpV2RecordLocation extends SpeakeasyBase {
    fieldId?: GooglePrivacyDlpV2FieldId;
    recordKey?: GooglePrivacyDlpV2RecordKey;
    tableLocation?: GooglePrivacyDlpV2TableLocation;
}
