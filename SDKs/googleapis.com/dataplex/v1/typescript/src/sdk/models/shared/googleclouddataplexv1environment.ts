import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1EnvironmentEndpoints } from "./googleclouddataplexv1environmentendpoints";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpec } from "./googleclouddataplexv1environmentinfrastructurespec";
import { GoogleCloudDataplexV1EnvironmentSessionSpec } from "./googleclouddataplexv1environmentsessionspec";
import { GoogleCloudDataplexV1EnvironmentSessionStatus } from "./googleclouddataplexv1environmentsessionstatus";

export enum GoogleCloudDataplexV1EnvironmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Creating = "CREATING"
,    Deleting = "DELETING"
,    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1Environment
/** 
 * Environment represents a user-visible compute infrastructure for analytics within a lake.
**/
export class GoogleCloudDataplexV1Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=endpoints" })
  endpoints?: GoogleCloudDataplexV1EnvironmentEndpoints;

  @Metadata({ data: "json, name=infrastructureSpec" })
  infrastructureSpec?: GoogleCloudDataplexV1EnvironmentInfrastructureSpec;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sessionSpec" })
  sessionSpec?: GoogleCloudDataplexV1EnvironmentSessionSpec;

  @Metadata({ data: "json, name=sessionStatus" })
  sessionStatus?: GoogleCloudDataplexV1EnvironmentSessionStatus;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1EnvironmentStateEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
