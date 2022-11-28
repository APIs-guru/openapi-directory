import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum {
    PolicyUnspecified = "POLICY_UNSPECIFIED",
    Allowed = "ALLOWED",
    Forbidden = "FORBIDDEN",
    Restricted = "RESTRICTED"
}
/**
 * Defines whether a feature can be used or what values are accepted.
**/
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature extends SpeakeasyBase {
    allowedValues?: string[];
    policy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum;
}
