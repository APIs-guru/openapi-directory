import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeVersion } from "./runtimeversion";
/**
 * Response for ListRuntimeVersions.
**/
export declare class ListRuntimeVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    runtimeVersions?: RuntimeVersion[];
    unreachable?: string[];
}
