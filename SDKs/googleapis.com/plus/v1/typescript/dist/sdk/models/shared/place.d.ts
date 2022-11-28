import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The physical address of the place.
**/
export declare class PlaceAddress extends SpeakeasyBase {
    formatted?: string;
}
/**
 * The position of the place.
**/
export declare class PlacePosition extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
export declare class Place extends SpeakeasyBase {
    address?: PlaceAddress;
    displayName?: string;
    id?: string;
    kind?: string;
    position?: PlacePosition;
}
