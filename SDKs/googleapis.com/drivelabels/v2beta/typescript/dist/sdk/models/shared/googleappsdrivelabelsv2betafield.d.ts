import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
export declare class GoogleAppsDriveLabelsV2betaField extends SpeakeasyBase {
    appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities;
    createTime?: string;
    creator?: GoogleAppsDriveLabelsV2betaUserInfo;
    dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptions;
    disableTime?: string;
    disabler?: GoogleAppsDriveLabelsV2betaUserInfo;
    displayHints?: GoogleAppsDriveLabelsV2betaFieldDisplayHints;
    id?: string;
    integerOptions?: GoogleAppsDriveLabelsV2betaFieldIntegerOptions;
    lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;
    lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;
    properties?: GoogleAppsDriveLabelsV2betaFieldProperties;
    publisher?: GoogleAppsDriveLabelsV2betaUserInfo;
    queryKey?: string;
    schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities;
    selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptions;
    textOptions?: GoogleAppsDriveLabelsV2betaFieldTextOptions;
    updateTime?: string;
    updater?: GoogleAppsDriveLabelsV2betaUserInfo;
    userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
}
/**
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
export declare class GoogleAppsDriveLabelsV2betaFieldInput extends SpeakeasyBase {
    appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities;
    creator?: GoogleAppsDriveLabelsV2betaUserInfo;
    dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptionsInput;
    disabler?: GoogleAppsDriveLabelsV2betaUserInfo;
    displayHints?: GoogleAppsDriveLabelsV2betaFieldDisplayHints;
    lifecycle?: GoogleAppsDriveLabelsV2betaLifecycleInput;
    properties?: GoogleAppsDriveLabelsV2betaFieldProperties;
    publisher?: GoogleAppsDriveLabelsV2betaUserInfo;
    schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities;
    selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput;
    updater?: GoogleAppsDriveLabelsV2betaUserInfo;
    userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
}
