import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Autopilot
/** 
 * Autopilot is the configuration for Autopilot settings on the cluster.
**/
export class Autopilot extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
