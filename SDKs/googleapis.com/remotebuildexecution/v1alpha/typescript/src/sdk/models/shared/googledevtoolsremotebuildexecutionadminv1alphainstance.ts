import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy";


export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING",
    Inactive = "INACTIVE"
}


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance
/** 
 * Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featurePolicy" })
  featurePolicy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingEnabled" })
  loggingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum;
}
