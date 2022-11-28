import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LkeNodeStatusStatusEnum {
    Ready = "ready",
    NotReady = "not_ready"
}


// LkeNodeStatus
/** 
 * Status information for a Node which is a member of a Kubernetes cluster.
 * 
**/
export class LkeNodeStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instance_id" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LkeNodeStatusStatusEnum;
}
