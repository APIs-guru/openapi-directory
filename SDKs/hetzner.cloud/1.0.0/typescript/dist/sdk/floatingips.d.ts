import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FloatingIPs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFloatingIpsId - Delete a Floating IP
     *
     * Deletes a Floating IP. If it is currently assigned to a Server it will automatically get unassigned.
    **/
    deleteFloatingIpsId(req: operations.DeleteFloatingIpsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFloatingIpsIdResponse>;
    /**
     * getFloatingIps - Get all Floating IPs
     *
     * Returns all Floating IP objects.
    **/
    getFloatingIps(req: operations.GetFloatingIpsRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpsResponse>;
    /**
     * getFloatingIpsId - Get a Floating IP
     *
     * Returns a specific Floating IP object.
    **/
    getFloatingIpsId(req: operations.GetFloatingIpsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpsIdResponse>;
    /**
     * postFloatingIps - Create a Floating IP
     *
     * Creates a new Floating IP assigned to a Server. If you want to create a Floating IP that is not bound to a Server, you need to provide the `home_location` key instead of `server`. This can be either the ID or the name of the Location this IP shall be created in. Note that a Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.
    **/
    postFloatingIps(req: operations.PostFloatingIpsRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsResponse>;
    /**
     * putFloatingIpsId - Update a Floating IP
     *
     * Updates the description or labels of a Floating IP.
     * Also note that when updating labels, the Floating IP’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
    **/
    putFloatingIpsId(req: operations.PutFloatingIpsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutFloatingIpsIdResponse>;
}
