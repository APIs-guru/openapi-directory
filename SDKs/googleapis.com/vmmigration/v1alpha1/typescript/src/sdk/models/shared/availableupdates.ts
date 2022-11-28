import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplianceVersion } from "./applianceversion";



// AvailableUpdates
/** 
 * Holds informatiom about the available versions for upgrade.
**/
export class AvailableUpdates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inPlaceUpdate" })
  inPlaceUpdate?: ApplianceVersion;

  @SpeakeasyMetadata({ data: "json, name=newDeployableAppliance" })
  newDeployableAppliance?: ApplianceVersion;
}
