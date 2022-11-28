import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { MatchingCriteria } from "./matchingcriteria";
import { Transport } from "./transport";
import { TransportInput } from "./transport";
/**
 * A representation of the trigger resource.
**/
export declare class Trigger extends SpeakeasyBase {
    createTime?: string;
    destination?: Destination;
    etag?: string;
    labels?: Map<string, string>;
    matchingCriteria?: MatchingCriteria[];
    name?: string;
    serviceAccount?: string;
    transport?: Transport;
    updateTime?: string;
}
/**
 * A representation of the trigger resource.
**/
export declare class TriggerInput extends SpeakeasyBase {
    destination?: Destination;
    labels?: Map<string, string>;
    matchingCriteria?: MatchingCriteria[];
    name?: string;
    serviceAccount?: string;
    transport?: TransportInput;
}
