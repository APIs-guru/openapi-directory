import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2UserInfo
/** 
 * Information about a user.
**/
export class GoogleAppsDriveLabelsV2UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: string;
}
