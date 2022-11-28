import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Response message for the Check method.
**/
export declare class CheckResponse extends SpeakeasyBase {
    headers?: Map<string, string>;
    status?: Status;
}
