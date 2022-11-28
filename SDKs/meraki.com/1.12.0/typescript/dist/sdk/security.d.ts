import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Security {
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
     * getNetworkApplianceSecurityIntrusion - Returns all supported intrusion settings for an MX network
     *
     * Returns all supported intrusion settings for an MX network
    **/
    getNetworkApplianceSecurityIntrusion(req: operations.GetNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityIntrusionResponse>;
    /**
     * getNetworkApplianceSecurityMalware - Returns all supported malware settings for an MX network
     *
     * Returns all supported malware settings for an MX network
    **/
    getNetworkApplianceSecurityMalware(req: operations.GetNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityMalwareResponse>;
    /**
     * getOrganizationApplianceSecurityEvents - List the security events for an organization
     *
     * List the security events for an organization
    **/
    getOrganizationApplianceSecurityEvents(req: operations.GetOrganizationApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityEventsResponse>;
    /**
     * getOrganizationApplianceSecurityIntrusion - Returns all supported intrusion settings for an organization
     *
     * Returns all supported intrusion settings for an organization
    **/
    getOrganizationApplianceSecurityIntrusion(req: operations.GetOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityIntrusionResponse>;
    /**
     * updateNetworkApplianceSecurityIntrusion - Set the supported intrusion settings for an MX network
     *
     * Set the supported intrusion settings for an MX network
    **/
    updateNetworkApplianceSecurityIntrusion(req: operations.UpdateNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityIntrusionResponse>;
    /**
     * updateNetworkApplianceSecurityMalware - Set the supported malware settings for an MX network
     *
     * Set the supported malware settings for an MX network
    **/
    updateNetworkApplianceSecurityMalware(req: operations.UpdateNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityMalwareResponse>;
    /**
     * updateOrganizationApplianceSecurityIntrusion - Sets supported intrusion settings for an organization
     *
     * Sets supported intrusion settings for an organization
    **/
    updateOrganizationApplianceSecurityIntrusion(req: operations.UpdateOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceSecurityIntrusionResponse>;
}
