import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WorkloadIdentityPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}


// WorkloadIdentityPool
/** 
 * Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.
**/
export class WorkloadIdentityPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: WorkloadIdentityPoolStateEnum;
}


// WorkloadIdentityPoolInput
/** 
 * Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.
**/
export class WorkloadIdentityPoolInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
