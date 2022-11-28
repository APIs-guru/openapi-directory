import { SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";
import { Detail } from "./detail";
export declare class SolutionUnassigned extends SpeakeasyBase {
    breaks?: string[];
    details?: Detail[];
    services?: string[];
    shipments?: string[];
}
/**
 * Only available if status field indicates `finished`.
**/
export declare class Solution extends SpeakeasyBase {
    completionTime?: number;
    costs?: number;
    distance?: number;
    maxOperationTime?: number;
    noUnassigned?: number;
    noVehicles?: number;
    preparationTime?: number;
    routes?: Route[];
    serviceDuration?: number;
    time?: number;
    transportTime?: number;
    unassigned?: SolutionUnassigned;
    waitingTime?: number;
}
