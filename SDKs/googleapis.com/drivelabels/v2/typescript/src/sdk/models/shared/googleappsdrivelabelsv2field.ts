import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2FieldAppliedCapabilities } from "./googleappsdrivelabelsv2fieldappliedcapabilities";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldDateOptions } from "./googleappsdrivelabelsv2fielddateoptions";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldDisplayHints } from "./googleappsdrivelabelsv2fielddisplayhints";
import { GoogleAppsDriveLabelsV2FieldIntegerOptions } from "./googleappsdrivelabelsv2fieldintegeroptions";
import { GoogleAppsDriveLabelsV2Lifecycle } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2FieldProperties } from "./googleappsdrivelabelsv2fieldproperties";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldSchemaCapabilities } from "./googleappsdrivelabelsv2fieldschemacapabilities";
import { GoogleAppsDriveLabelsV2FieldSelectionOptions } from "./googleappsdrivelabelsv2fieldselectionoptions";
import { GoogleAppsDriveLabelsV2FieldTextOptions } from "./googleappsdrivelabelsv2fieldtextoptions";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldUserOptions } from "./googleappsdrivelabelsv2fielduseroptions";


// GoogleAppsDriveLabelsV2Field
/** 
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
export class GoogleAppsDriveLabelsV2Field extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedCapabilities" })
  appliedCapabilities?: GoogleAppsDriveLabelsV2FieldAppliedCapabilities;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=dateOptions" })
  dateOptions?: GoogleAppsDriveLabelsV2FieldDateOptions;

  @Metadata({ data: "json, name=disableTime" })
  disableTime?: string;

  @Metadata({ data: "json, name=disabler" })
  disabler?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=displayHints" })
  displayHints?: GoogleAppsDriveLabelsV2FieldDisplayHints;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=integerOptions" })
  integerOptions?: GoogleAppsDriveLabelsV2FieldIntegerOptions;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: GoogleAppsDriveLabelsV2LockStatus;

  @Metadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2FieldProperties;

  @Metadata({ data: "json, name=publisher" })
  publisher?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=queryKey" })
  queryKey?: string;

  @Metadata({ data: "json, name=schemaCapabilities" })
  schemaCapabilities?: GoogleAppsDriveLabelsV2FieldSchemaCapabilities;

  @Metadata({ data: "json, name=selectionOptions" })
  selectionOptions?: GoogleAppsDriveLabelsV2FieldSelectionOptions;

  @Metadata({ data: "json, name=textOptions" })
  textOptions?: GoogleAppsDriveLabelsV2FieldTextOptions;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=updater" })
  updater?: GoogleAppsDriveLabelsV2UserInfo;

  @Metadata({ data: "json, name=userOptions" })
  userOptions?: GoogleAppsDriveLabelsV2FieldUserOptions;
}
