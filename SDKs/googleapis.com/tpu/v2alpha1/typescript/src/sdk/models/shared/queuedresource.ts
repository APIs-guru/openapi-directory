import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Guaranteed } from "./guaranteed";
import { QueueingPolicy } from "./queueingpolicy";
import { QueuedResourceState } from "./queuedresourcestate";
import { TpuInput } from "./tpu";
import { Tpu } from "./tpu";



// QueuedResourceInput
/** 
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
**/
export class QueuedResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestEffort" })
  bestEffort?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=guaranteed" })
  guaranteed?: Guaranteed;

  @SpeakeasyMetadata({ data: "json, name=queueingPolicy" })
  queueingPolicy?: QueueingPolicy;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: QueuedResourceState;

  @SpeakeasyMetadata({ data: "json, name=tpu" })
  tpu?: TpuInput;
}


// QueuedResource
/** 
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
**/
export class QueuedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestEffort" })
  bestEffort?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=guaranteed" })
  guaranteed?: Guaranteed;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=queueingPolicy" })
  queueingPolicy?: QueueingPolicy;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: QueuedResourceState;

  @SpeakeasyMetadata({ data: "json, name=tpu" })
  tpu?: Tpu;
}
