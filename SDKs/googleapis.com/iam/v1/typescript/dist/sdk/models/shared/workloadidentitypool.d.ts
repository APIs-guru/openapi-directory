import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum WorkloadIdentityPoolStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}
/**
 * Represents a collection of external workload identities. You can define IAM policies to grant these identities access to Google Cloud resources.
**/
export declare class WorkloadIdentityPool extends SpeakeasyBase {
    description?: string;
    disabled?: boolean;
    displayName?: string;
    name?: string;
    state?: WorkloadIdentityPoolStateEnum;
}
