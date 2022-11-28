import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints } from "./googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities";
import { GoogleAppsDriveLabelsV2betaLifecycleInput } from "./googleappsdrivelabelsv2betalifecycle";



// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice
/** 
 * Selection field choice.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @SpeakeasyMetadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updater" })
  updater?: GoogleAppsDriveLabelsV2betaUserInfo;
}


// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput
/** 
 * Selection field choice.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycleInput;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities;

  @SpeakeasyMetadata({ data: "json, name=updater" })
  updater?: GoogleAppsDriveLabelsV2betaUserInfo;
}
