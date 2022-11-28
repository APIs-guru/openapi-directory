import { SpeakeasyBase } from "../../../internal/utils";
import { Stop } from "./stop";
export declare class Shipment extends SpeakeasyBase {
    allowedVehicles?: string[];
    delivery: Stop;
    disallowedVehicles?: string[];
    id: string;
    maxTimeInVehicle?: number;
    name?: string;
    pickup: Stop;
    priority?: number;
    requiredSkills?: string[];
    size?: number[];
}
