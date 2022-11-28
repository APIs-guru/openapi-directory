import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A geographic location that can be associated with a timeline item.
**/
export declare class Location extends SpeakeasyBase {
    accuracy?: number;
    address?: string;
    displayName?: string;
    id?: string;
    kind?: string;
    latitude?: number;
    longitude?: number;
    timestamp?: Date;
}
