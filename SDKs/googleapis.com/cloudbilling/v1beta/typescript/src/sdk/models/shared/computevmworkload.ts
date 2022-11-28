import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuestAccelerator } from "./guestaccelerator";
import { Usage } from "./usage";
import { MachineType } from "./machinetype";
import { PersistentDisk } from "./persistentdisk";



// ComputeVmWorkload
/** 
 * Specificies usage of a set of identical compute VM instances.
**/
export class ComputeVmWorkload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableConfidentialCompute" })
  enableConfidentialCompute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=guestAccelerator" })
  guestAccelerator?: GuestAccelerator;

  @SpeakeasyMetadata({ data: "json, name=instancesRunning" })
  instancesRunning?: Usage;

  @SpeakeasyMetadata({ data: "json, name=licenses" })
  licenses?: string[];

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: MachineType;

  @SpeakeasyMetadata({ data: "json, name=persistentDisks", elemType: PersistentDisk })
  persistentDisks?: PersistentDisk[];

  @SpeakeasyMetadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
