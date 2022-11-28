import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig } from "./instanceconfig";
/**
 * The response for ListInstanceConfigs.
**/
export declare class ListInstanceConfigsResponse extends SpeakeasyBase {
    instanceConfigs?: InstanceConfig[];
    nextPageToken?: string;
}
