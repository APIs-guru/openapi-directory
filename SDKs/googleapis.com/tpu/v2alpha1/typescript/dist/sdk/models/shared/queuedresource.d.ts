import { SpeakeasyBase } from "../../../internal/utils";
import { Guaranteed } from "./guaranteed";
import { QueueingPolicy } from "./queueingpolicy";
import { QueuedResourceState } from "./queuedresourcestate";
import { TpuInput } from "./tpu";
import { Tpu } from "./tpu";
/**
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
**/
export declare class QueuedResourceInput extends SpeakeasyBase {
    bestEffort?: Map<string, any>;
    guaranteed?: Guaranteed;
    queueingPolicy?: QueueingPolicy;
    state?: QueuedResourceState;
    tpu?: TpuInput;
}
/**
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
**/
export declare class QueuedResource extends SpeakeasyBase {
    bestEffort?: Map<string, any>;
    guaranteed?: Guaranteed;
    name?: string;
    queueingPolicy?: QueueingPolicy;
    state?: QueuedResourceState;
    tpu?: Tpu;
}
