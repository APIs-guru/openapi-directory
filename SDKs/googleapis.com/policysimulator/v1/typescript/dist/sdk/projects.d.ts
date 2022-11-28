import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * policysimulatorProjectsLocationsReplaysCreate - Creates and starts a Replay using the given ReplayConfig.
    **/
    policysimulatorProjectsLocationsReplaysCreate(req: operations.PolicysimulatorProjectsLocationsReplaysCreateRequest, config?: AxiosRequestConfig): Promise<operations.PolicysimulatorProjectsLocationsReplaysCreateResponse>;
    /**
     * policysimulatorProjectsLocationsReplaysOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    policysimulatorProjectsLocationsReplaysOperationsList(req: operations.PolicysimulatorProjectsLocationsReplaysOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.PolicysimulatorProjectsLocationsReplaysOperationsListResponse>;
    /**
     * policysimulatorProjectsLocationsReplaysResultsList - Lists the results of running a Replay.
    **/
    policysimulatorProjectsLocationsReplaysResultsList(req: operations.PolicysimulatorProjectsLocationsReplaysResultsListRequest, config?: AxiosRequestConfig): Promise<operations.PolicysimulatorProjectsLocationsReplaysResultsListResponse>;
}
