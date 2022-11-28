import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PushConfig } from "./pushconfig";



// Subscription
/** 
 * A subscription resource.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ackDeadlineSeconds" })
  ackDeadlineSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pushConfig" })
  pushConfig?: PushConfig;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
