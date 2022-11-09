import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceLevelObjective } from "./servicelevelobjective";


// ListServiceLevelObjectivesResponse
/** 
 * The ListServiceLevelObjectives response.
**/
export class ListServiceLevelObjectivesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=serviceLevelObjectives", elemType: shared.ServiceLevelObjective })
  serviceLevelObjectives?: ServiceLevelObjective[];
}
