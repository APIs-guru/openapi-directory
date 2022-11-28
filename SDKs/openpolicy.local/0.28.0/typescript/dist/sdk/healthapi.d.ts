import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HealthApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHealth - Health
     *
     * This API endpoint verifies that the server is operational.
     *
     * The response from the server is either 200 or 500:
     * - **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.
     * - **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.
     *
     * ---
     * **Note**
     * This check is only for initial bundle activation. Subsequent downloads will not affect the health check.
     *
     * Use the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.
     *
     * ---
     *
     * https://www.openpolicyagent.org/docs/latest/management/#bundles - Bundles
    **/
    getHealth(req: operations.GetHealthRequest, config?: AxiosRequestConfig): Promise<operations.GetHealthResponse>;
}
