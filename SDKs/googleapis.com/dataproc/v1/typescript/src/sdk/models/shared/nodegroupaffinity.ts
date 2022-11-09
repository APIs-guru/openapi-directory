import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeGroupAffinity
/** 
 * Node Group Affinity for clusters using sole-tenant node groups.
**/
export class NodeGroupAffinity extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodeGroupUri" })
  nodeGroupUri?: string;
}
