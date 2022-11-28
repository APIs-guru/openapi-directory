import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceLevelObjective } from "./servicelevelobjective";
/**
 * The ListServiceLevelObjectives response.
**/
export declare class ListServiceLevelObjectivesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    serviceLevelObjectives?: ServiceLevelObjective[];
}
