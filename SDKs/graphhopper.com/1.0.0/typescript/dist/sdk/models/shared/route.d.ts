import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { RoutePoint } from "./routepoint";
export declare class Route extends SpeakeasyBase {
    activities?: Activity[];
    completionTime?: number;
    distance?: number;
    points?: RoutePoint[];
    preparationTime?: number;
    serviceDuration?: number;
    transportTime?: number;
    vehicleId?: string;
    waitingTime?: number;
}
