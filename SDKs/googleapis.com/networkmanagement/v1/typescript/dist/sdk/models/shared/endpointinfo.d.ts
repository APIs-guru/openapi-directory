import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
**/
export declare class EndpointInfo extends SpeakeasyBase {
    destinationIp?: string;
    destinationNetworkUri?: string;
    destinationPort?: number;
    protocol?: string;
    sourceIp?: string;
    sourceNetworkUri?: string;
    sourcePort?: number;
}
