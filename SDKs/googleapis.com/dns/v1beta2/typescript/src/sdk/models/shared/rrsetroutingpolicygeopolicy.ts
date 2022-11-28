import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyGeoPolicyGeoPolicyItem } from "./rrsetroutingpolicygeopolicygeopolicyitem";



// RrSetRoutingPolicyGeoPolicy
/** 
 * Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
**/
export class RrSetRoutingPolicyGeoPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableFencing" })
  enableFencing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: RrSetRoutingPolicyGeoPolicyGeoPolicyItem })
  items?: RrSetRoutingPolicyGeoPolicyGeoPolicyItem[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
