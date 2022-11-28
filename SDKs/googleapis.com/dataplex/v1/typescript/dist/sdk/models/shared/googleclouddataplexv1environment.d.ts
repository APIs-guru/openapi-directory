import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1EnvironmentEndpoints } from "./googleclouddataplexv1environmentendpoints";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpec } from "./googleclouddataplexv1environmentinfrastructurespec";
import { GoogleCloudDataplexV1EnvironmentSessionSpec } from "./googleclouddataplexv1environmentsessionspec";
import { GoogleCloudDataplexV1EnvironmentSessionStatus } from "./googleclouddataplexv1environmentsessionstatus";
export declare enum GoogleCloudDataplexV1EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * Environment represents a user-visible compute infrastructure for analytics within a lake.
**/
export declare class GoogleCloudDataplexV1Environment extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    endpoints?: GoogleCloudDataplexV1EnvironmentEndpoints;
    infrastructureSpec?: GoogleCloudDataplexV1EnvironmentInfrastructureSpec;
    labels?: Map<string, string>;
    name?: string;
    sessionSpec?: GoogleCloudDataplexV1EnvironmentSessionSpec;
    sessionStatus?: GoogleCloudDataplexV1EnvironmentSessionStatus;
    state?: GoogleCloudDataplexV1EnvironmentStateEnum;
    uid?: string;
    updateTime?: string;
}
/**
 * Environment represents a user-visible compute infrastructure for analytics within a lake.
**/
export declare class GoogleCloudDataplexV1EnvironmentInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    infrastructureSpec?: GoogleCloudDataplexV1EnvironmentInfrastructureSpec;
    labels?: Map<string, string>;
    sessionSpec?: GoogleCloudDataplexV1EnvironmentSessionSpec;
}
