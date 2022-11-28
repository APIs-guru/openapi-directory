import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2LabelAppliedCapabilities } from "./googleappsdrivelabelsv2labelappliedcapabilities";
import { GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy } from "./googleappsdrivelabelsv2labelappliedlabelpolicy";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
import { GoogleAppsDriveLabelsV2LabelDisplayHints } from "./googleappsdrivelabelsv2labeldisplayhints";
import { GoogleAppsDriveLabelsV2Field } from "./googleappsdrivelabelsv2field";
import { GoogleAppsDriveLabelsV2Lifecycle } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2LabelProperties } from "./googleappsdrivelabelsv2labelproperties";
import { GoogleAppsDriveLabelsV2LabelSchemaCapabilities } from "./googleappsdrivelabelsv2labelschemacapabilities";
export declare enum GoogleAppsDriveLabelsV2LabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED",
    Shared = "SHARED",
    Admin = "ADMIN"
}
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
export declare class GoogleAppsDriveLabelsV2Label extends SpeakeasyBase {
    appliedCapabilities?: GoogleAppsDriveLabelsV2LabelAppliedCapabilities;
    appliedLabelPolicy?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;
    createTime?: string;
    creator?: GoogleAppsDriveLabelsV2UserInfo;
    disableTime?: string;
    disabler?: GoogleAppsDriveLabelsV2UserInfo;
    displayHints?: GoogleAppsDriveLabelsV2LabelDisplayHints;
    fields?: GoogleAppsDriveLabelsV2Field[];
    id?: string;
    labelType?: GoogleAppsDriveLabelsV2LabelLabelTypeEnum;
    learnMoreUri?: string;
    lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;
    lockStatus?: GoogleAppsDriveLabelsV2LockStatus;
    name?: string;
    properties?: GoogleAppsDriveLabelsV2LabelProperties;
    publishTime?: string;
    publisher?: GoogleAppsDriveLabelsV2UserInfo;
    revisionCreateTime?: string;
    revisionCreator?: GoogleAppsDriveLabelsV2UserInfo;
    revisionId?: string;
    schemaCapabilities?: GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
}
