import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GuestAccelerator } from "./guestaccelerator";
import { Usage } from "./usage";
import { MachineType } from "./machinetype";
import { PersistentDisk } from "./persistentdisk";


// ComputeVmWorkload
/** 
 * Specificies usage of a set of identical compute VM instances.
**/
export class ComputeVmWorkload extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableConfidentialCompute" })
  enableConfidentialCompute?: boolean;

  @Metadata({ data: "json, name=guestAccelerator" })
  guestAccelerator?: GuestAccelerator;

  @Metadata({ data: "json, name=instancesRunning" })
  instancesRunning?: Usage;

  @Metadata({ data: "json, name=licenses" })
  licenses?: string[];

  @Metadata({ data: "json, name=machineType" })
  machineType?: MachineType;

  @Metadata({ data: "json, name=persistentDisks", elemType: shared.PersistentDisk })
  persistentDisks?: PersistentDisk[];

  @Metadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @Metadata({ data: "json, name=region" })
  region?: string;
}
