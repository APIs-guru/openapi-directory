import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints } from "./googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints";
import { GoogleAppsDriveLabelsV2Lifecycle } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceproperties";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities";



// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice
/** 
 * Selection field choice.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @SpeakeasyMetadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2LockStatus;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2UserInfo;

  @SpeakeasyMetadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updater" })
  updater?: GoogleAppsDriveLabelsV2UserInfo;
}
