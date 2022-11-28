import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterInput } from "./cluster";
import { InstanceInput } from "./instance";
/**
 * Request message for BigtableInstanceAdmin.CreateInstance.
**/
export declare class CreateInstanceRequestInput extends SpeakeasyBase {
    clusters?: Map<string, ClusterInput>;
    instance?: InstanceInput;
    instanceId?: string;
    parent?: string;
}
