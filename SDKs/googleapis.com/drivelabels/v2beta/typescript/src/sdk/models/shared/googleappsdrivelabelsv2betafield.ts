import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities } from "./googleappsdrivelabelsv2betafieldappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldDateOptions } from "./googleappsdrivelabelsv2betafielddateoptions";
import { GoogleAppsDriveLabelsV2betaFieldDisplayHints } from "./googleappsdrivelabelsv2betafielddisplayhints";
import { GoogleAppsDriveLabelsV2betaFieldIntegerOptions } from "./googleappsdrivelabelsv2betafieldintegeroptions";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
import { GoogleAppsDriveLabelsV2betaFieldProperties } from "./googleappsdrivelabelsv2betafieldproperties";
import { GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities } from "./googleappsdrivelabelsv2betafieldschemacapabilities";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptions } from "./googleappsdrivelabelsv2betafieldselectionoptions";
import { GoogleAppsDriveLabelsV2betaFieldTextOptions } from "./googleappsdrivelabelsv2betafieldtextoptions";
import { GoogleAppsDriveLabelsV2betaFieldUserOptions } from "./googleappsdrivelabelsv2betafielduseroptions";
import { GoogleAppsDriveLabelsV2betaFieldDateOptionsInput } from "./googleappsdrivelabelsv2betafielddateoptions";
import { GoogleAppsDriveLabelsV2betaLifecycleInput } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput } from "./googleappsdrivelabelsv2betafieldselectionoptions";



// GoogleAppsDriveLabelsV2betaField
/** 
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
export class GoogleAppsDriveLabelsV2betaField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=dateOptions" })
  dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptions;

  @SpeakeasyMetadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @SpeakeasyMetadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2betaFieldDisplayHints;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=integerOptions" })
  integerOptions?: GoogleAppsDriveLabelsV2betaFieldIntegerOptions;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaFieldProperties;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=queryKey" })
  queryKey?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities;

  @SpeakeasyMetadata({ data: "json, name=selectionOptions" })
  selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptions;

  @SpeakeasyMetadata({ data: "json, name=textOptions" })
  textOptions?: GoogleAppsDriveLabelsV2betaFieldTextOptions;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updater" })
  updater?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=userOptions" })
  userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
}


// GoogleAppsDriveLabelsV2betaFieldInput
/** 
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
export class GoogleAppsDriveLabelsV2betaFieldInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=dateOptions" })
  dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptionsInput;

  @SpeakeasyMetadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2betaFieldDisplayHints;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycleInput;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaFieldProperties;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities;

  @SpeakeasyMetadata({ data: "json, name=selectionOptions" })
  selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput;

  @SpeakeasyMetadata({ data: "json, name=updater" })
  updater?: GoogleAppsDriveLabelsV2betaUserInfo;

  @SpeakeasyMetadata({ data: "json, name=userOptions" })
  userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
}
