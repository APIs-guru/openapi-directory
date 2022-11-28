import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * servicenetworkingServicesAddSubnetwork - For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed. The response from the `get` operation will be of type `Subnetwork` if the operation successfully completes.
    **/
    servicenetworkingServicesAddSubnetwork(req: operations.ServicenetworkingServicesAddSubnetworkRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesAddSubnetworkResponse>;
    /**
     * servicenetworkingServicesConnectionsCreate - Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once. The response from the `get` operation will be of type `Connection` if the operation successfully completes.
    **/
    servicenetworkingServicesConnectionsCreate(req: operations.ServicenetworkingServicesConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesConnectionsCreateResponse>;
    /**
     * servicenetworkingServicesConnectionsList - List the private connections that are configured in a service consumer's VPC network.
    **/
    servicenetworkingServicesConnectionsList(req: operations.ServicenetworkingServicesConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesConnectionsListResponse>;
    /**
     * servicenetworkingServicesSearchRange - Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation). Operation
    **/
    servicenetworkingServicesSearchRange(req: operations.ServicenetworkingServicesSearchRangeRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesSearchRangeResponse>;
    /**
     * servicenetworkingServicesUpdateConnections - Updates the allocated ranges that are assigned to a connection. The response from the `get` operation will be of type `Connection` if the operation successfully completes.
    **/
    servicenetworkingServicesUpdateConnections(req: operations.ServicenetworkingServicesUpdateConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesUpdateConnectionsResponse>;
}
