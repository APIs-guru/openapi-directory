import { SpeakeasyBase } from "../../../internal/utils";
import { ApplianceVersion } from "./applianceversion";
/**
 * Holds informatiom about the available versions for upgrade.
**/
export declare class AvailableUpdates extends SpeakeasyBase {
    inPlaceUpdate?: ApplianceVersion;
    newDeployableAppliance?: ApplianceVersion;
}
