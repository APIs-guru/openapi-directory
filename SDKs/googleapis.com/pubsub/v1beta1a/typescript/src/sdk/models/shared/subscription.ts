import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PushConfig } from "./pushconfig";


// Subscription
/** 
 * A subscription resource.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ackDeadlineSeconds" })
  ackDeadlineSeconds?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pushConfig" })
  pushConfig?: PushConfig;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
