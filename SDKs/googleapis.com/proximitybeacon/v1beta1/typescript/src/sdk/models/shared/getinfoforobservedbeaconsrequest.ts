import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Observation } from "./observation";



// GetInfoForObservedBeaconsRequest
/** 
 * Request for beacon and attachment information about beacons that a mobile client has encountered "in the wild".
**/
export class GetInfoForObservedBeaconsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespacedTypes" })
  namespacedTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=observations", elemType: Observation })
  observations?: Observation[];
}
