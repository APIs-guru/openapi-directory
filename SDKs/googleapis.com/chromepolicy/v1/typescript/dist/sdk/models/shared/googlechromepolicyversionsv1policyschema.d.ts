import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1AdditionalTargetKeyName } from "./googlechromepolicyversionsv1additionaltargetkeyname";
import { Proto2FileDescriptorProto } from "./proto2filedescriptorproto";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDescription } from "./googlechromepolicyversionsv1policyschemafielddescription";
import { GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription } from "./googlechromepolicyversionsv1policyschemanoticedescription";
import { ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle } from "./chromecrosdpanelautosettingsprotopolicyapilifecycle";
export declare enum GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum {
    TargetResourceUnspecified = "TARGET_RESOURCE_UNSPECIFIED",
    OrgUnit = "ORG_UNIT",
    Group = "GROUP"
}
/**
 * Resource representing a policy schema.
**/
export declare class GoogleChromePolicyVersionsV1PolicySchema extends SpeakeasyBase {
    accessRestrictions?: string[];
    additionalTargetKeyNames?: GoogleChromePolicyVersionsV1AdditionalTargetKeyName[];
    categoryTitle?: string;
    definition?: Proto2FileDescriptorProto;
    fieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];
    name?: string;
    notices?: GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription[];
    policyApiLifecycle?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle;
    policyApiLifeycle?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle;
    policyDescription?: string;
    schemaName?: string;
    supportUri?: string;
    validTargetResources?: GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum[];
}
