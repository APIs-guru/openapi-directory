import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LkeNodeStatus } from "./lkenodestatus";


export enum LkeNodePoolDisksTypeEnum {
    Raw = "raw",
    Ext4 = "ext4"
}


// LkeNodePoolDisks
/** 
 * The values to assign to each partition in this Node Pool's custom disk layout.
 * 
**/
export class LkeNodePoolDisks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LkeNodePoolDisksTypeEnum;
}


// LkeNodePool
/** 
 * The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
 * 
**/
export class LkeNodePool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: LkeNodePoolDisks })
  disks?: LkeNodePoolDisks[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: LkeNodeStatus })
  nodes?: LkeNodeStatus[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
