import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Observation } from "./observation";
/**
 * Request for beacon and attachment information about beacons that a mobile client has encountered "in the wild".
**/
export declare class GetInfoForObservedBeaconsRequest extends SpeakeasyBase {
    namespacedTypes?: string[];
    observations?: Observation[];
}
