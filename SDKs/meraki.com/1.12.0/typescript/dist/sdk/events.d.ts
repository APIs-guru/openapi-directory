import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkApplianceClientSecurityEvents - List the security events for a client
     *
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkApplianceClientSecurityEvents(req: operations.GetNetworkApplianceClientSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceClientSecurityEventsResponse>;
    /**
     * getNetworkApplianceSecurityEvents - List the security events for a network
     *
     * List the security events for a network
    **/
    getNetworkApplianceSecurityEvents(req: operations.GetNetworkApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityEventsResponse>;
    /**
     * getNetworkEvents - List the events for the network
     *
     * List the events for the network
    **/
    getNetworkEvents(req: operations.GetNetworkEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsResponse>;
    /**
     * getNetworkEventsEventTypes - List the event type to human-readable description
     *
     * List the event type to human-readable description
    **/
    getNetworkEventsEventTypes(req: operations.GetNetworkEventsEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsEventTypesResponse>;
    /**
     * getOrganizationApplianceSecurityEvents - List the security events for an organization
     *
     * List the security events for an organization
    **/
    getOrganizationApplianceSecurityEvents(req: operations.GetOrganizationApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityEventsResponse>;
}
