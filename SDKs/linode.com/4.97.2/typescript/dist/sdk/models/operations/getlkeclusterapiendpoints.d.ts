import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLkeClusterApiEndpointsPathParams extends SpeakeasyBase {
    clusterId: number;
}
export declare class GetLkeClusterApiEndpointsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
/**
 * The Kubernetes API server endpoints for this cluster.
 *
**/
export declare class GetLkeClusterApiEndpoints200ApplicationJsonData extends SpeakeasyBase {
    endpoint?: string;
}
export declare class GetLkeClusterApiEndpoints200ApplicationJson extends SpeakeasyBase {
    data?: GetLkeClusterApiEndpoints200ApplicationJsonData[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLkeClusterApiEndpointsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLkeClusterApiEndpointsRequest extends SpeakeasyBase {
    pathParams: GetLkeClusterApiEndpointsPathParams;
    security: GetLkeClusterApiEndpointsSecurity;
}
export declare class GetLkeClusterApiEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLkeClusterApiEndpoints200ApplicationJsonObject?: GetLkeClusterApiEndpoints200ApplicationJson;
    getLkeClusterApiEndpointsDefaultApplicationJsonObject?: GetLkeClusterApiEndpointsDefaultApplicationJson;
}
