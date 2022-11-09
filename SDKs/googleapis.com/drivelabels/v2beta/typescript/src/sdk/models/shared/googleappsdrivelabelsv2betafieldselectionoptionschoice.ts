import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints } from "./googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";


// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice
/** 
 * Selection field choice.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @Metadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;

  @Metadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=updater" })
  updater?: GoogleAppsDriveLabelsV2betaUserInfo;
}
