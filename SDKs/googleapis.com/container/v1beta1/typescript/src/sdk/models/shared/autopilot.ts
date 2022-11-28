import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Autopilot
/** 
 * Autopilot is the configuration for Autopilot settings on the cluster.
**/
export class Autopilot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
