import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";



// RrSetRoutingPolicyGeoPolicyGeoPolicyItem
/** 
 * ResourceRecordSet data for one geo location.
**/
export class RrSetRoutingPolicyGeoPolicyGeoPolicyItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=healthCheckedTargets" })
  healthCheckedTargets?: RrSetRoutingPolicyHealthCheckTargets;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=rrdatas" })
  rrdatas?: string[];

  @SpeakeasyMetadata({ data: "json, name=signatureRrdatas" })
  signatureRrdatas?: string[];
}
