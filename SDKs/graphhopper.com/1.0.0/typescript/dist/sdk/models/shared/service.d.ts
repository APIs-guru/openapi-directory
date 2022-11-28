import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { TimeWindow } from "./timewindow";
export declare enum ServiceTypeEnum {
    Service = "service",
    Pickup = "pickup",
    Delivery = "delivery"
}
export declare class Service extends SpeakeasyBase {
    address?: Address;
    allowedVehicles?: string[];
    disallowedVehicles?: string[];
    duration?: number;
    group?: string;
    id: string;
    maxTimeInVehicle?: number;
    name?: string;
    preparationTime?: number;
    priority?: number;
    requiredSkills?: string[];
    size?: number[];
    timeWindows?: TimeWindow[];
    type?: ServiceTypeEnum;
}
