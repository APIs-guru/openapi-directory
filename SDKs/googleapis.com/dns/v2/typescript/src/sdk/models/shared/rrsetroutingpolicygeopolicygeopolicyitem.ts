import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RrSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";


// RrSetRoutingPolicyGeoPolicyGeoPolicyItem
/** 
 * ResourceRecordSet data for one geo location.
**/
export class RrSetRoutingPolicyGeoPolicyGeoPolicyItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=healthCheckedTargets" })
  healthCheckedTargets?: RrSetRoutingPolicyHealthCheckTargets;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=rrdatas" })
  rrdatas?: string[];

  @Metadata({ data: "json, name=signatureRrdatas" })
  signatureRrdatas?: string[];
}
