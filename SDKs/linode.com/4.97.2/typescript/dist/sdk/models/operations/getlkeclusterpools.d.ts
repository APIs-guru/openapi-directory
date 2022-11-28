import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLkeClusterPoolsPathParams extends SpeakeasyBase {
    clusterId: number;
}
export declare class GetLkeClusterPoolsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLkeClusterPools200ApplicationJson extends SpeakeasyBase {
    data?: shared.LkeNodePool[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLkeClusterPoolsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLkeClusterPoolsRequest extends SpeakeasyBase {
    pathParams: GetLkeClusterPoolsPathParams;
    security: GetLkeClusterPoolsSecurity;
}
export declare class GetLkeClusterPoolsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLkeClusterPools200ApplicationJsonObject?: GetLkeClusterPools200ApplicationJson;
    getLkeClusterPoolsDefaultApplicationJsonObject?: GetLkeClusterPoolsDefaultApplicationJson;
}
