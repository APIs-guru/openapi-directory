import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterInput } from "./cluster";
import { InstanceInput } from "./instance";



// CreateInstanceRequestInput
/** 
 * Request message for BigtableInstanceAdmin.CreateInstance.
**/
export class CreateInstanceRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters", elemType: ClusterInput })
  clusters?: Map<string, ClusterInput>;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: InstanceInput;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
