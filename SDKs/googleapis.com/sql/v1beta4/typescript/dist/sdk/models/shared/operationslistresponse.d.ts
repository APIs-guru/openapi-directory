import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * Operations list response.
**/
export declare class OperationsListResponse extends SpeakeasyBase {
    items?: Operation[];
    kind?: string;
    nextPageToken?: string;
}
