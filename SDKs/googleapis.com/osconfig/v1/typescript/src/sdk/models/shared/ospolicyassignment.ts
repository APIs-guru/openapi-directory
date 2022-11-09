import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyAssignmentInstanceFilter } from "./ospolicyassignmentinstancefilter";
import { OsPolicy } from "./ospolicy";
import { OsPolicyAssignmentRollout } from "./ospolicyassignmentrollout";

export enum OsPolicyAssignmentRolloutStateEnum {
    RolloutStateUnspecified = "ROLLOUT_STATE_UNSPECIFIED"
,    InProgress = "IN_PROGRESS"
,    Cancelling = "CANCELLING"
,    Cancelled = "CANCELLED"
,    Succeeded = "SUCCEEDED"
}


// OsPolicyAssignment
/** 
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
**/
export class OsPolicyAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseline" })
  baseline?: boolean;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=instanceFilter" })
  instanceFilter?: OsPolicyAssignmentInstanceFilter;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=osPolicies", elemType: shared.OsPolicy })
  osPolicies?: OsPolicy[];

  @Metadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @Metadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=rollout" })
  rollout?: OsPolicyAssignmentRollout;

  @Metadata({ data: "json, name=rolloutState" })
  rolloutState?: OsPolicyAssignmentRolloutStateEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
