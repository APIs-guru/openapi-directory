import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Accelerator } from "./accelerator";
import { Disk } from "./disk";
import { Network } from "./network";
import { ServiceAccount } from "./serviceaccount";
import { Volume } from "./volume";


// VirtualMachine
/** 
 * Carries information about a Compute Engine VM resource.
**/
export class VirtualMachine extends SpeakeasyBase {
  @Metadata({ data: "json, name=accelerators", elemType: shared.Accelerator })
  accelerators?: Accelerator[];

  @Metadata({ data: "json, name=bootDiskSizeGb" })
  bootDiskSizeGb?: number;

  @Metadata({ data: "json, name=bootImage" })
  bootImage?: string;

  @Metadata({ data: "json, name=cpuPlatform" })
  cpuPlatform?: string;

  @Metadata({ data: "json, name=disks", elemType: shared.Disk })
  disks?: Disk[];

  @Metadata({ data: "json, name=dockerCacheImages" })
  dockerCacheImages?: string[];

  @Metadata({ data: "json, name=enableStackdriverMonitoring" })
  enableStackdriverMonitoring?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=network" })
  network?: Network;

  @Metadata({ data: "json, name=nvidiaDriverVersion" })
  nvidiaDriverVersion?: string;

  @Metadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @Metadata({ data: "json, name=reservation" })
  reservation?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}
