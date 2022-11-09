import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Endpoint } from "./endpoint";
export declare class ListEndpointsResponse extends SpeakeasyBase {
    endpoints?: Endpoint[];
    nextPageToken?: string;
    unreachable?: string[];
}
