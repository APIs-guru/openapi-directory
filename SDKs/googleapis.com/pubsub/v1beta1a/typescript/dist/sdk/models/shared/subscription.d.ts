import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PushConfig } from "./pushconfig";
/**
 * A subscription resource.
**/
export declare class Subscription extends SpeakeasyBase {
    ackDeadlineSeconds?: number;
    name?: string;
    pushConfig?: PushConfig;
    topic?: string;
}
