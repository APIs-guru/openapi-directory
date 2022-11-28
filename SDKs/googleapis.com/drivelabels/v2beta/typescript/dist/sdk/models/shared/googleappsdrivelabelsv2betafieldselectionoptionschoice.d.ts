import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints } from "./googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities";
import { GoogleAppsDriveLabelsV2betaLifecycleInput } from "./googleappsdrivelabelsv2betalifecycle";
/**
 * Selection field choice.
**/
export declare class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice extends SpeakeasyBase {
    appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities;
    createTime?: string;
    creator?: GoogleAppsDriveLabelsV2betaUserInfo;
    disableTime?: string;
    disabler?: GoogleAppsDriveLabelsV2betaUserInfo;
    displayHints?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints;
    id?: string;
    lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;
    lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;
    properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;
    publishTime?: string;
    publisher?: GoogleAppsDriveLabelsV2betaUserInfo;
    schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities;
    updateTime?: string;
    updater?: GoogleAppsDriveLabelsV2betaUserInfo;
}
/**
 * Selection field choice.
**/
export declare class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput extends SpeakeasyBase {
    appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities;
    creator?: GoogleAppsDriveLabelsV2betaUserInfo;
    disabler?: GoogleAppsDriveLabelsV2betaUserInfo;
    displayHints?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints;
    id?: string;
    lifecycle?: GoogleAppsDriveLabelsV2betaLifecycleInput;
    properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;
    publisher?: GoogleAppsDriveLabelsV2betaUserInfo;
    schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities;
    updater?: GoogleAppsDriveLabelsV2betaUserInfo;
}
