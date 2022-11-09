import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RrSetRoutingPolicyGeoPolicyGeoPolicyItem } from "./rrsetroutingpolicygeopolicygeopolicyitem";


// RrSetRoutingPolicyGeoPolicy
/** 
 * Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.
**/
export class RrSetRoutingPolicyGeoPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableFencing" })
  enableFencing?: boolean;

  @Metadata({ data: "json, name=items", elemType: shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem })
  items?: RrSetRoutingPolicyGeoPolicyGeoPolicyItem[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
