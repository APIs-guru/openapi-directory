import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaacceleratorconfig";


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig
/** 
 * Defines the configuration to be used for creating workers in the worker pool.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accelerator" })
  accelerator?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;

  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @Metadata({ data: "json, name=diskType" })
  diskType?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=maxConcurrentActions" })
  maxConcurrentActions?: string;

  @Metadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @Metadata({ data: "json, name=networkAccess" })
  networkAccess?: string;

  @Metadata({ data: "json, name=reserved" })
  reserved?: boolean;

  @Metadata({ data: "json, name=soleTenantNodeType" })
  soleTenantNodeType?: string;

  @Metadata({ data: "json, name=vmImage" })
  vmImage?: string;
}
