import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints } from "./googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints";
import { GoogleAppsDriveLabelsV2Lifecycle } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceproperties";
import { GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities } from "./googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities";
/**
 * Selection field choice.
**/
export declare class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice extends SpeakeasyBase {
    appliedCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities;
    createTime?: string;
    creator?: GoogleAppsDriveLabelsV2UserInfo;
    disableTime?: string;
    disabler?: GoogleAppsDriveLabelsV2UserInfo;
    displayHints?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints;
    id?: string;
    lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;
    lockStatus?: GoogleAppsDriveLabelsV2LockStatus;
    properties?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;
    publishTime?: string;
    publisher?: GoogleAppsDriveLabelsV2UserInfo;
    schemaCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities;
    updateTime?: string;
    updater?: GoogleAppsDriveLabelsV2UserInfo;
}
