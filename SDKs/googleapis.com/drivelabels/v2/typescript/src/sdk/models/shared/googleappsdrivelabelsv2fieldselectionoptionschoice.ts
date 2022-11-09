import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints } from "./googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints";
import { GoogleAppsDriveLabelsV2Lifecycle } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceproperties";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";


// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice
/** 
 * Selection field choice.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @Metadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2LockStatus;

  @Metadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=updater" })
  updater?: GoogleAppsDriveLabelsV2UserInfo;
}
