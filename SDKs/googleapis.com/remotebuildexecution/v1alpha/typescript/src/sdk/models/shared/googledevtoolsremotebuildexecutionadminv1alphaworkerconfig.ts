import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaacceleratorconfig";



// GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig
/** 
 * Defines the configuration to be used for creating workers in the worker pool.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accelerator" })
  accelerator?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=maxConcurrentActions" })
  maxConcurrentActions?: string;

  @SpeakeasyMetadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=networkAccess" })
  networkAccess?: string;

  @SpeakeasyMetadata({ data: "json, name=reserved" })
  reserved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=soleTenantNodeType" })
  soleTenantNodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=vmImage" })
  vmImage?: string;
}
