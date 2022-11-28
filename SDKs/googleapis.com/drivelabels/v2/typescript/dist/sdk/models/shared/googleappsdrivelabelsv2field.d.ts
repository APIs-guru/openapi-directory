import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldAppliedCapabilities } from "./googleappsdrivelabelsv2fieldappliedcapabilities";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldDateOptions } from "./googleappsdrivelabelsv2fielddateoptions";
import { GoogleAppsDriveLabelsV2FieldDisplayHints } from "./googleappsdrivelabelsv2fielddisplayhints";
import { GoogleAppsDriveLabelsV2FieldIntegerOptions } from "./googleappsdrivelabelsv2fieldintegeroptions";
import { GoogleAppsDriveLabelsV2Lifecycle } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2FieldProperties } from "./googleappsdrivelabelsv2fieldproperties";
import { GoogleAppsDriveLabelsV2FieldSchemaCapabilities } from "./googleappsdrivelabelsv2fieldschemacapabilities";
import { GoogleAppsDriveLabelsV2FieldSelectionOptions } from "./googleappsdrivelabelsv2fieldselectionoptions";
import { GoogleAppsDriveLabelsV2FieldTextOptions } from "./googleappsdrivelabelsv2fieldtextoptions";
import { GoogleAppsDriveLabelsV2FieldUserOptions } from "./googleappsdrivelabelsv2fielduseroptions";
/**
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
export declare class GoogleAppsDriveLabelsV2Field extends SpeakeasyBase {
    appliedCapabilities?: GoogleAppsDriveLabelsV2FieldAppliedCapabilities;
    createTime?: string;
    creator?: GoogleAppsDriveLabelsV2UserInfo;
    dateOptions?: GoogleAppsDriveLabelsV2FieldDateOptions;
    disableTime?: string;
    disabler?: GoogleAppsDriveLabelsV2UserInfo;
    displayHints?: GoogleAppsDriveLabelsV2FieldDisplayHints;
    id?: string;
    integerOptions?: GoogleAppsDriveLabelsV2FieldIntegerOptions;
    lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;
    lockStatus?: GoogleAppsDriveLabelsV2LockStatus;
    properties?: GoogleAppsDriveLabelsV2FieldProperties;
    publisher?: GoogleAppsDriveLabelsV2UserInfo;
    queryKey?: string;
    schemaCapabilities?: GoogleAppsDriveLabelsV2FieldSchemaCapabilities;
    selectionOptions?: GoogleAppsDriveLabelsV2FieldSelectionOptions;
    textOptions?: GoogleAppsDriveLabelsV2FieldTextOptions;
    updateTime?: string;
    updater?: GoogleAppsDriveLabelsV2UserInfo;
    userOptions?: GoogleAppsDriveLabelsV2FieldUserOptions;
}
