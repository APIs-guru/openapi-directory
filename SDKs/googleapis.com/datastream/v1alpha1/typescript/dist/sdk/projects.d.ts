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
     * datastreamProjectsLocationsConnectionProfilesCreate - Use this method to create a connection profile in a project and location.
    **/
    datastreamProjectsLocationsConnectionProfilesCreate(req: operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsConnectionProfilesCreateResponse>;
    /**
     * datastreamProjectsLocationsConnectionProfilesDiscover - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
    **/
    datastreamProjectsLocationsConnectionProfilesDiscover(req: operations.DatastreamProjectsLocationsConnectionProfilesDiscoverRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsConnectionProfilesDiscoverResponse>;
    /**
     * datastreamProjectsLocationsConnectionProfilesList - Use this method to list connection profiles created in a project and location.
    **/
    datastreamProjectsLocationsConnectionProfilesList(req: operations.DatastreamProjectsLocationsConnectionProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsConnectionProfilesListResponse>;
    /**
     * datastreamProjectsLocationsFetchStaticIps - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
    **/
    datastreamProjectsLocationsFetchStaticIps(req: operations.DatastreamProjectsLocationsFetchStaticIpsRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsFetchStaticIpsResponse>;
    /**
     * datastreamProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    datastreamProjectsLocationsList(req: operations.DatastreamProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsListResponse>;
    /**
     * datastreamProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    datastreamProjectsLocationsOperationsCancel(req: operations.DatastreamProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsOperationsCancelResponse>;
    /**
     * datastreamProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    datastreamProjectsLocationsOperationsList(req: operations.DatastreamProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsOperationsListResponse>;
    /**
     * datastreamProjectsLocationsPrivateConnectionsCreate - Use this method to create a private connectivity configuration.
    **/
    datastreamProjectsLocationsPrivateConnectionsCreate(req: operations.DatastreamProjectsLocationsPrivateConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsPrivateConnectionsCreateResponse>;
    /**
     * datastreamProjectsLocationsPrivateConnectionsList - Use this method to list private connectivity configurations in a project and location.
    **/
    datastreamProjectsLocationsPrivateConnectionsList(req: operations.DatastreamProjectsLocationsPrivateConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsPrivateConnectionsListResponse>;
    /**
     * datastreamProjectsLocationsPrivateConnectionsRoutesCreate - Use this method to create a route for a private connectivity in a project and location.
    **/
    datastreamProjectsLocationsPrivateConnectionsRoutesCreate(req: operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateResponse>;
    /**
     * datastreamProjectsLocationsPrivateConnectionsRoutesList - Use this method to list routes created for a private connectivity in a project and location.
    **/
    datastreamProjectsLocationsPrivateConnectionsRoutesList(req: operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse>;
    /**
     * datastreamProjectsLocationsStreamsCreate - Use this method to create a stream.
    **/
    datastreamProjectsLocationsStreamsCreate(req: operations.DatastreamProjectsLocationsStreamsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsCreateResponse>;
    /**
     * datastreamProjectsLocationsStreamsDelete - Use this method to delete a stream.
    **/
    datastreamProjectsLocationsStreamsDelete(req: operations.DatastreamProjectsLocationsStreamsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsDeleteResponse>;
    /**
     * datastreamProjectsLocationsStreamsFetchErrors - Use this method to fetch any errors associated with a stream.
    **/
    datastreamProjectsLocationsStreamsFetchErrors(req: operations.DatastreamProjectsLocationsStreamsFetchErrorsRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsFetchErrorsResponse>;
    /**
     * datastreamProjectsLocationsStreamsList - Use this method to list streams in a project and location.
    **/
    datastreamProjectsLocationsStreamsList(req: operations.DatastreamProjectsLocationsStreamsListRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsListResponse>;
    /**
     * datastreamProjectsLocationsStreamsObjectsGet - Use this method to get details about a stream object.
    **/
    datastreamProjectsLocationsStreamsObjectsGet(req: operations.DatastreamProjectsLocationsStreamsObjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsObjectsGetResponse>;
    /**
     * datastreamProjectsLocationsStreamsObjectsList - Use this method to list the objects of a specific stream.
    **/
    datastreamProjectsLocationsStreamsObjectsList(req: operations.DatastreamProjectsLocationsStreamsObjectsListRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsObjectsListResponse>;
    /**
     * datastreamProjectsLocationsStreamsObjectsStartBackfillJob - Starts backfill job for the specified stream object.
    **/
    datastreamProjectsLocationsStreamsObjectsStartBackfillJob(req: operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse>;
    /**
     * datastreamProjectsLocationsStreamsObjectsStopBackfillJob - Stops the backfill job for the specified stream object.
    **/
    datastreamProjectsLocationsStreamsObjectsStopBackfillJob(req: operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse>;
    /**
     * datastreamProjectsLocationsStreamsPatch - Use this method to update the configuration of a stream.
    **/
    datastreamProjectsLocationsStreamsPatch(req: operations.DatastreamProjectsLocationsStreamsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DatastreamProjectsLocationsStreamsPatchResponse>;
}
