import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Observation } from "./observation";


// GetInfoForObservedBeaconsRequest
/** 
 * Request for beacon and attachment information about beacons that a mobile client has encountered "in the wild".
**/
export class GetInfoForObservedBeaconsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespacedTypes" })
  namespacedTypes?: string[];

  @Metadata({ data: "json, name=observations", elemType: shared.Observation })
  observations?: Observation[];
}
