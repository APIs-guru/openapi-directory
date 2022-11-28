import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FloatingIpActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFloatingIpsIdActions - Get all Actions for a Floating IP
     *
     * Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
    **/
    getFloatingIpsIdActions(req: operations.GetFloatingIpsIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpsIdActionsResponse>;
    /**
     * getFloatingIpsIdActionsActionId - Get an Action for a Floating IP
     *
     * Returns a specific Action object for a Floating IP.
    **/
    getFloatingIpsIdActionsActionId(req: operations.GetFloatingIpsIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpsIdActionsActionIdResponse>;
    /**
     * postFloatingIpsIdActionsAssign - Assign a Floating IP to a Server
     *
     * Assigns a Floating IP to a Server.
    **/
    postFloatingIpsIdActionsAssign(req: operations.PostFloatingIpsIdActionsAssignRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsIdActionsAssignResponse>;
    /**
     * postFloatingIpsIdActionsChangeDnsPtr - Change reverse DNS entry for a Floating IP
     *
     * Changes the hostname that will appear when getting the hostname belonging to this Floating IP.
    **/
    postFloatingIpsIdActionsChangeDnsPtr(req: operations.PostFloatingIpsIdActionsChangeDnsPtrRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsIdActionsChangeDnsPtrResponse>;
    /**
     * postFloatingIpsIdActionsChangeProtection - Change Floating IP Protection
     *
     * Changes the protection configuration of the Floating IP.
    **/
    postFloatingIpsIdActionsChangeProtection(req: operations.PostFloatingIpsIdActionsChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsIdActionsChangeProtectionResponse>;
    /**
     * postFloatingIpsIdActionsUnassign - Unassign a Floating IP
     *
     * Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.
    **/
    postFloatingIpsIdActionsUnassign(req: operations.PostFloatingIpsIdActionsUnassignRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsIdActionsUnassignResponse>;
}
