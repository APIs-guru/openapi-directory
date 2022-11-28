import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1EnvironmentEndpoints } from "./googleclouddataplexv1environmentendpoints";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpec } from "./googleclouddataplexv1environmentinfrastructurespec";
import { GoogleCloudDataplexV1EnvironmentSessionSpec } from "./googleclouddataplexv1environmentsessionspec";
import { GoogleCloudDataplexV1EnvironmentSessionStatus } from "./googleclouddataplexv1environmentsessionstatus";


export enum GoogleCloudDataplexV1EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1Environment
/** 
 * Environment represents a user-visible compute infrastructure for analytics within a lake.
**/
export class GoogleCloudDataplexV1Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoints" })
  endpoints?: GoogleCloudDataplexV1EnvironmentEndpoints;

  @SpeakeasyMetadata({ data: "json, name=infrastructureSpec" })
  infrastructureSpec?: GoogleCloudDataplexV1EnvironmentInfrastructureSpec;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionSpec" })
  sessionSpec?: GoogleCloudDataplexV1EnvironmentSessionSpec;

  @SpeakeasyMetadata({ data: "json, name=sessionStatus" })
  sessionStatus?: GoogleCloudDataplexV1EnvironmentSessionStatus;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1EnvironmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudDataplexV1EnvironmentInput
/** 
 * Environment represents a user-visible compute infrastructure for analytics within a lake.
**/
export class GoogleCloudDataplexV1EnvironmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=infrastructureSpec" })
  infrastructureSpec?: GoogleCloudDataplexV1EnvironmentInfrastructureSpec;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sessionSpec" })
  sessionSpec?: GoogleCloudDataplexV1EnvironmentSessionSpec;
}
