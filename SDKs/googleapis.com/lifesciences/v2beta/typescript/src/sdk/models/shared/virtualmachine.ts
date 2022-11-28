import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=accelerators", elemType: Accelerator })
  accelerators?: Accelerator[];

  @SpeakeasyMetadata({ data: "json, name=bootDiskSizeGb" })
  bootDiskSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=bootImage" })
  bootImage?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuPlatform" })
  cpuPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: Disk })
  disks?: Disk[];

  @SpeakeasyMetadata({ data: "json, name=dockerCacheImages" })
  dockerCacheImages?: string[];

  @SpeakeasyMetadata({ data: "json, name=enableStackdriverMonitoring" })
  enableStackdriverMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: Network;

  @SpeakeasyMetadata({ data: "json, name=nvidiaDriverVersion" })
  nvidiaDriverVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reservation" })
  reservation?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}
