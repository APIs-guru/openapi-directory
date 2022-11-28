import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleAddressType } from "./simpleaddresstype";
import { Source } from "./source";
/**
 * A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.
**/
export declare class PollingLocation extends SpeakeasyBase {
    address?: SimpleAddressType;
    endDate?: string;
    latitude?: number;
    longitude?: number;
    name?: string;
    notes?: string;
    pollingHours?: string;
    sources?: Source[];
    startDate?: string;
    voterServices?: string;
}
