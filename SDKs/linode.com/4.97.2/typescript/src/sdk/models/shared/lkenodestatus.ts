import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LkeNodeStatusStatusEnum {
    Ready = "ready"
,    NotReady = "not_ready"
}


// LkeNodeStatus
/** 
 * Status information for a Node which is a member of a Kubernetes cluster.
 * 
**/
export class LkeNodeStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instance_id" })
  instanceId?: string;

  @Metadata({ data: "json, name=status" })
  status?: LkeNodeStatusStatusEnum;
}
