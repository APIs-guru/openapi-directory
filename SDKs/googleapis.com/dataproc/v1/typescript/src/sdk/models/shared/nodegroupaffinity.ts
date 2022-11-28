import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeGroupAffinity
/** 
 * Node Group Affinity for clusters using sole-tenant node groups.
**/
export class NodeGroupAffinity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeGroupUri" })
  nodeGroupUri?: string;
}
