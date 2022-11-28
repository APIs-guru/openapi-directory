import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
**/
export declare class AssignedLocationInput extends SpeakeasyBase {
    targetingOptionId?: string;
}
/**
 * An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
**/
export declare class AssignedLocation extends SpeakeasyBase {
    assignedLocationId?: string;
    name?: string;
    targetingOptionId?: string;
}
