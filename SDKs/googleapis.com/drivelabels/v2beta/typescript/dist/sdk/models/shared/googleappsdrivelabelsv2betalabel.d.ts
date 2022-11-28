import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities } from "./googleappsdrivelabelsv2betalabelappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy } from "./googleappsdrivelabelsv2betalabelappliedlabelpolicy";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
import { GoogleAppsDriveLabelsV2betaLabelDisplayHints } from "./googleappsdrivelabelsv2betalabeldisplayhints";
import { GoogleAppsDriveLabelsV2betaFieldInput } from "./googleappsdrivelabelsv2betafield";
import { GoogleAppsDriveLabelsV2betaLifecycleInput } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLabelProperties } from "./googleappsdrivelabelsv2betalabelproperties";
import { GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities } from "./googleappsdrivelabelsv2betalabelschemacapabilities";
import { GoogleAppsDriveLabelsV2betaField } from "./googleappsdrivelabelsv2betafield";
import { GoogleAppsDriveLabelsV2betaLifecycle } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
export declare enum GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED",
    Shared = "SHARED",
    Admin = "ADMIN"
}
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
export declare class GoogleAppsDriveLabelsV2betaLabelInput extends SpeakeasyBase {
    appliedCapabilities?: GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;
    appliedLabelPolicy?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;
    creator?: GoogleAppsDriveLabelsV2betaUserInfo;
    disabler?: GoogleAppsDriveLabelsV2betaUserInfo;
    displayHints?: GoogleAppsDriveLabelsV2betaLabelDisplayHints;
    fields?: GoogleAppsDriveLabelsV2betaFieldInput[];
    labelType?: GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;
    learnMoreUri?: string;
    lifecycle?: GoogleAppsDriveLabelsV2betaLifecycleInput;
    properties?: GoogleAppsDriveLabelsV2betaLabelProperties;
    publisher?: GoogleAppsDriveLabelsV2betaUserInfo;
    revisionCreator?: GoogleAppsDriveLabelsV2betaUserInfo;
    schemaCapabilities?: GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
}
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
export declare class GoogleAppsDriveLabelsV2betaLabel extends SpeakeasyBase {
    appliedCapabilities?: GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;
    appliedLabelPolicy?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;
    createTime?: string;
    creator?: GoogleAppsDriveLabelsV2betaUserInfo;
    disableTime?: string;
    disabler?: GoogleAppsDriveLabelsV2betaUserInfo;
    displayHints?: GoogleAppsDriveLabelsV2betaLabelDisplayHints;
    fields?: GoogleAppsDriveLabelsV2betaField[];
    id?: string;
    labelType?: GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;
    learnMoreUri?: string;
    lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;
    lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;
    name?: string;
    properties?: GoogleAppsDriveLabelsV2betaLabelProperties;
    publishTime?: string;
    publisher?: GoogleAppsDriveLabelsV2betaUserInfo;
    revisionCreateTime?: string;
    revisionCreator?: GoogleAppsDriveLabelsV2betaUserInfo;
    revisionId?: string;
    schemaCapabilities?: GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
}
