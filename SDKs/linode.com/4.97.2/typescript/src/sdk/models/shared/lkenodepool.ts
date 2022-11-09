import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LkeNodeStatus } from "./lkenodestatus";

export enum LkeNodePoolDisksTypeEnum {
    Raw = "raw"
,    Ext4 = "ext4"
}


// LkeNodePoolDisks
/** 
 * The values to assign to each partition in this Node Pool's custom disk layout.
 * 
**/
export class LkeNodePoolDisks extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=type" })
  type?: LkeNodePoolDisksTypeEnum;
}


// LkeNodePool
/** 
 * The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
 * 
**/
export class LkeNodePool extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=disks", elemType: shared.LkeNodePoolDisks })
  disks?: LkeNodePoolDisks[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=nodes", elemType: shared.LkeNodeStatus })
  nodes?: LkeNodeStatus[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
