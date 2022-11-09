import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";
/**
 * A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.
**/
export declare class OperationsListResponse extends SpeakeasyBase {
    nextPageToken?: string;
    operations?: Operation[];
}
