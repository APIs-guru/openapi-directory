import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleAddressType } from "./simpleaddresstype";
import { Channel } from "./channel";
import { GeocodingSummary } from "./geocodingsummary";
/**
 * Information about a person holding an elected office.
**/
export declare class Official extends SpeakeasyBase {
    address?: SimpleAddressType[];
    channels?: Channel[];
    emails?: string[];
    geocodingSummaries?: GeocodingSummary[];
    name?: string;
    party?: string;
    phones?: string[];
    photoUrl?: string;
    urls?: string[];
}
