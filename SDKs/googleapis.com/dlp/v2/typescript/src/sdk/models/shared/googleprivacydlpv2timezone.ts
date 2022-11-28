import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2TimeZone
/** 
 * Time zone of the date time object.
**/
export class GooglePrivacyDlpV2TimeZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offsetMinutes" })
  offsetMinutes?: number;
}
