import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentInstanceFilter } from "./ospolicyassignmentinstancefilter";
import { OsPolicy } from "./ospolicy";
import { OsPolicyAssignmentRollout } from "./ospolicyassignmentrollout";


export enum OsPolicyAssignmentRolloutStateEnum {
    RolloutStateUnspecified = "ROLLOUT_STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED"
}


// OsPolicyAssignment
/** 
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
**/
export class OsPolicyAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseline" })
  baseline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceFilter" })
  instanceFilter?: OsPolicyAssignmentInstanceFilter;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicies", elemType: OsPolicy })
  osPolicies?: OsPolicy[];

  @SpeakeasyMetadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=rollout" })
  rollout?: OsPolicyAssignmentRollout;

  @SpeakeasyMetadata({ data: "json, name=rolloutState" })
  rolloutState?: OsPolicyAssignmentRolloutStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


// OsPolicyAssignmentInput
/** 
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
**/
export class OsPolicyAssignmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceFilter" })
  instanceFilter?: OsPolicyAssignmentInstanceFilter;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicies", elemType: OsPolicy })
  osPolicies?: OsPolicy[];

  @SpeakeasyMetadata({ data: "json, name=rollout" })
  rollout?: OsPolicyAssignmentRollout;
}
