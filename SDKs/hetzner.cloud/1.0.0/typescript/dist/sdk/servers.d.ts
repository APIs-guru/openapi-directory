import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Servers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteServersId - Delete a Server
     *
     * Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible.
    **/
    deleteServersId(req: operations.DeleteServersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServersIdResponse>;
    /**
     * getServers - Get all Servers
     *
     * Returns all existing Server objects
    **/
    getServers(req: operations.GetServersRequest, config?: AxiosRequestConfig): Promise<operations.GetServersResponse>;
    /**
     * getServersId - Get a Server
     *
     * Returns a specific Server object. The Server must exist inside the Project
    **/
    getServersId(req: operations.GetServersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetServersIdResponse>;
    /**
     * getServersIdMetrics - Get Metrics for a Server
     *
     * Get Metrics for specified Server.
     *
     * You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.
     *
     * Depending on the type you will get different time series data
     *
     * | Type    | Timeseries              | Unit      | Description                                          |
     * |---------|-------------------------|-----------|------------------------------------------------------|
     * | cpu     | cpu                     | percent   | Percent CPU usage                                    |
     * | disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
     * |         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
     * |         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
     * |         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
     * | network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
     * |         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
     * |         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
     * |         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |
     *
     * Metrics are available for the last 30 days only.
     *
     * If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.
     *
     * We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.
     *
    **/
    getServersIdMetrics(req: operations.GetServersIdMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetServersIdMetricsResponse>;
    /**
     * postServers - Create a Server
     *
     * Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.
    **/
    postServers(req: operations.PostServersRequest, config?: AxiosRequestConfig): Promise<operations.PostServersResponse>;
    /**
     * putServersId - Update a Server
     *
     * Updates a Server. You can update a Server’s name and a Server’s labels.
     * Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
     * Also note that when updating labels, the Server’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
    **/
    putServersId(req: operations.PutServersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutServersIdResponse>;
}
