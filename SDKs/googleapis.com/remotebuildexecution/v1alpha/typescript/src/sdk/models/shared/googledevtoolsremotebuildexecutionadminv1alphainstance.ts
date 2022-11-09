import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy";

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Running = "RUNNING"
,    Inactive = "INACTIVE"
}


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance
/** 
 * Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=featurePolicy" })
  featurePolicy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=loggingEnabled" })
  loggingEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum;
}
