import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";
/**
 * This resource represents a long-running operation that is the result of a network API call.
**/
export declare class GoogleLongrunningOperation extends SpeakeasyBase {
    done?: boolean;
    error?: Status;
    metadata?: Map<string, any>;
    name?: string;
    response?: Map<string, any>;
}
