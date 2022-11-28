import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class Vehicle extends SpeakeasyBase {
    break?: any;
    earliestStart?: number;
    endAddress?: Address;
    latestEnd?: number;
    maxActivities?: number;
    maxDistance?: number;
    maxDrivingTime?: number;
    maxJobs?: number;
    minJobs?: number;
    moveToEndAddress?: boolean;
    returnToDepot?: boolean;
    skills?: string[];
    startAddress: Address;
    typeId?: string;
    vehicleId: string;
}
