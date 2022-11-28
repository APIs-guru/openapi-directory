import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceLevelObjective } from "./servicelevelobjective";



// ListServiceLevelObjectivesResponse
/** 
 * The ListServiceLevelObjectives response.
**/
export class ListServiceLevelObjectivesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceLevelObjectives", elemType: ServiceLevelObjective })
  serviceLevelObjectives?: ServiceLevelObjective[];
}
