import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFunctionEndpoint } from "./cloudfunctionendpoint";
export declare enum EndpointNetworkTypeEnum {
    NetworkTypeUnspecified = "NETWORK_TYPE_UNSPECIFIED",
    GcpNetwork = "GCP_NETWORK",
    NonGcpNetwork = "NON_GCP_NETWORK"
}
/**
 * Source or destination of the Connectivity Test.
**/
export declare class Endpoint extends SpeakeasyBase {
    cloudFunction?: CloudFunctionEndpoint;
    cloudSqlInstance?: string;
    gkeMasterCluster?: string;
    instance?: string;
    ipAddress?: string;
    network?: string;
    networkType?: EndpointNetworkTypeEnum;
    port?: number;
    projectId?: string;
}
