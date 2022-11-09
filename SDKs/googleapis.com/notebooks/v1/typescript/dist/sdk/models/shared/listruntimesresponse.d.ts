import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Runtime } from "./runtime";
/**
 * Response for listing Managed Notebook Runtimes.
**/
export declare class ListRuntimesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    runtimes?: Runtime[];
    unreachable?: string[];
}
