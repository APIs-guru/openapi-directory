import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LoadBalancers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteLoadBalancersId - Delete a Load Balancer
     *
     * Deletes a Load Balancer.
    **/
    deleteLoadBalancersId(req: operations.DeleteLoadBalancersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLoadBalancersIdResponse>;
    /**
     * getLoadBalancers - Get all Load Balancers
     *
     * Gets all existing Load Balancers that you have available.
    **/
    getLoadBalancers(req: operations.GetLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancersResponse>;
    /**
     * getLoadBalancersId - Get a Load Balancer
     *
     * Gets a specific Load Balancer object.
    **/
    getLoadBalancersId(req: operations.GetLoadBalancersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancersIdResponse>;
    /**
     * getLoadBalancersIdMetrics - Get Metrics for a LoadBalancer
     *
     * You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.
     *
     * Depending on the type you will get different time series data:
     *
     * |Type | Timeseries | Unit | Description |
     * |---- |------------|------|-------------|
     * | open_connections | open_connections | number | Open connections |
     * | connections_per_second | connections_per_second | connections/s | Connections per second |
     * | requests_per_second | requests_per_second | requests/s | Requests per second |
     * | bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
     * || bandwidth.out | bytes/s | Egress bandwidth |
     *
     * Metrics are available for the last 30 days only.
     *
     * If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.
     *
     * We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.
     *
    **/
    getLoadBalancersIdMetrics(req: operations.GetLoadBalancersIdMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancersIdMetricsResponse>;
    /**
     * postLoadBalancers - Create a Load Balancer
     *
     * Creates a Load Balancer.
     *
     * #### Call specific error codes
     *
     * | Code                                    | Description                                                                                           |
     * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
     * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
     * | `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
     * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
     * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
     * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
     * | `source_port_already_used`              | The source port you are trying to add is already in use                                               |
     * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
     *
    **/
    postLoadBalancers(req: operations.PostLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersResponse>;
    /**
     * putLoadBalancersId - Update a Load Balancer
     *
     * Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.
     *
     * Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
     * Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.
     *
    **/
    putLoadBalancersId(req: operations.PutLoadBalancersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutLoadBalancersIdResponse>;
}
