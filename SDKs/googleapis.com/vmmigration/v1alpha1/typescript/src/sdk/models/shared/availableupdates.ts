import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplianceVersion } from "./applianceversion";
import { ApplianceVersion } from "./applianceversion";


// AvailableUpdates
/** 
 * Holds informatiom about the available versions for upgrade.
**/
export class AvailableUpdates extends SpeakeasyBase {
  @Metadata({ data: "json, name=inPlaceUpdate" })
  inPlaceUpdate?: ApplianceVersion;

  @Metadata({ data: "json, name=newDeployableAppliance" })
  newDeployableAppliance?: ApplianceVersion;
}
