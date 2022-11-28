import { SpeakeasyBase } from "../../../internal/utils";
import { StateCondition } from "./statecondition";
import { Destination } from "./destination";
import { EventFilter } from "./eventfilter";
import { Transport } from "./transport";
import { TransportInput } from "./transport";
/**
 * A representation of the trigger resource.
**/
export declare class Trigger extends SpeakeasyBase {
    channel?: string;
    conditions?: Map<string, StateCondition>;
    createTime?: string;
    destination?: Destination;
    etag?: string;
    eventFilters?: EventFilter[];
    labels?: Map<string, string>;
    name?: string;
    serviceAccount?: string;
    transport?: Transport;
    uid?: string;
    updateTime?: string;
}
/**
 * A representation of the trigger resource.
**/
export declare class TriggerInput extends SpeakeasyBase {
    channel?: string;
    destination?: Destination;
    eventFilters?: EventFilter[];
    labels?: Map<string, string>;
    name?: string;
    serviceAccount?: string;
    transport?: TransportInput;
}
