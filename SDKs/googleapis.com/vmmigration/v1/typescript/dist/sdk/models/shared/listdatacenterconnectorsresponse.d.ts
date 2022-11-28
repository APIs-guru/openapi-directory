import { SpeakeasyBase } from "../../../internal/utils";
import { DatacenterConnector } from "./datacenterconnector";
/**
 * Response message for 'ListDatacenterConnectors' request.
**/
export declare class ListDatacenterConnectorsResponse extends SpeakeasyBase {
    datacenterConnectors?: DatacenterConnector[];
    nextPageToken?: string;
    unreachable?: string[];
}
