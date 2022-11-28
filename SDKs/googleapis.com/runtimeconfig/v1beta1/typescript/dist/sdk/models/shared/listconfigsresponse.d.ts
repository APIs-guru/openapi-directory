import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeConfig } from "./runtimeconfig";
/**
 * `ListConfigs()` returns the following response. The order of returned objects is arbitrary; that is, it is not ordered in any particular way.
**/
export declare class ListConfigsResponse extends SpeakeasyBase {
    configs?: RuntimeConfig[];
    nextPageToken?: string;
}
