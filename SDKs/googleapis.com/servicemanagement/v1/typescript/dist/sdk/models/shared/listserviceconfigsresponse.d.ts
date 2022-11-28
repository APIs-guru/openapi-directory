import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * Response message for ListServiceConfigs method.
**/
export declare class ListServiceConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    serviceConfigs?: Service[];
}
