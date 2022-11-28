import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentInstanceFilter } from "./ospolicyassignmentinstancefilter";
import { OsPolicy } from "./ospolicy";
import { OsPolicyAssignmentRollout } from "./ospolicyassignmentrollout";
export declare enum OsPolicyAssignmentRolloutStateEnum {
    RolloutStateUnspecified = "ROLLOUT_STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED"
}
/**
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
**/
export declare class OsPolicyAssignment extends SpeakeasyBase {
    baseline?: boolean;
    deleted?: boolean;
    description?: string;
    etag?: string;
    instanceFilter?: OsPolicyAssignmentInstanceFilter;
    name?: string;
    osPolicies?: OsPolicy[];
    reconciling?: boolean;
    revisionCreateTime?: string;
    revisionId?: string;
    rollout?: OsPolicyAssignmentRollout;
    rolloutState?: OsPolicyAssignmentRolloutStateEnum;
    uid?: string;
}
/**
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
**/
export declare class OsPolicyAssignmentInput extends SpeakeasyBase {
    description?: string;
    etag?: string;
    instanceFilter?: OsPolicyAssignmentInstanceFilter;
    name?: string;
    osPolicies?: OsPolicy[];
    rollout?: OsPolicyAssignmentRollout;
}
