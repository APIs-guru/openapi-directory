import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Trigger } from "./trigger";
/**
 * The response message for the `ListTriggers` method.
**/
export declare class ListTriggersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    triggers?: Trigger[];
    unreachable?: string[];
}
