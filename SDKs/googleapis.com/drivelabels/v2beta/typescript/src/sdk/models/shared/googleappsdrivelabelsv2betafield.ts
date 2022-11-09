import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities } from "./googleappsdrivelabelsv2betafieldappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldDateOptions } from "./googleappsdrivelabelsv2betafielddateoptions";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldDisplayHints } from "./googleappsdrivelabelsv2betafielddisplayhints";
import { GoogleAppsDriveLabelsV2betaFieldIntegerOptions } from "./googleappsdrivelabelsv2betafieldintegeroptions";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
import { GoogleAppsDriveLabelsV2betaFieldProperties } from "./googleappsdrivelabelsv2betafieldproperties";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities } from "./googleappsdrivelabelsv2betafieldschemacapabilities";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptions } from "./googleappsdrivelabelsv2betafieldselectionoptions";
import { GoogleAppsDriveLabelsV2betaFieldTextOptions } from "./googleappsdrivelabelsv2betafieldtextoptions";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldUserOptions } from "./googleappsdrivelabelsv2betafielduseroptions";


// GoogleAppsDriveLabelsV2betaField
/** 
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
export class GoogleAppsDriveLabelsV2betaField extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=dateOptions" })
  dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptions;

  @Metadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @Metadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2betaFieldDisplayHints;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=integerOptions" })
  integerOptions?: GoogleAppsDriveLabelsV2betaFieldIntegerOptions;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;

  @Metadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaFieldProperties;

  @Metadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=queryKey" })
  queryKey?: string;

  @Metadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities;

  @Metadata({ data: "json, name=selectionOptions" })
  selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptions;

  @Metadata({ data: "json, name=textOptions" })
  textOptions?: GoogleAppsDriveLabelsV2betaFieldTextOptions;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=updater" })
  updater?: GoogleAppsDriveLabelsV2betaUserInfo;

  @Metadata({ data: "json, name=userOptions" })
  userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
}
