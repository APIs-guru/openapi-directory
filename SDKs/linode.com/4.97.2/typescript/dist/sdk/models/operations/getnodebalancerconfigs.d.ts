import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodeBalancerConfigsPathParams extends SpeakeasyBase {
    nodeBalancerId: number;
}
export declare class GetNodeBalancerConfigsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetNodeBalancerConfigsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetNodeBalancerConfigs200ApplicationJson extends SpeakeasyBase {
    data?: shared.NodeBalancerConfig[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetNodeBalancerConfigsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetNodeBalancerConfigsRequest extends SpeakeasyBase {
    pathParams: GetNodeBalancerConfigsPathParams;
    queryParams: GetNodeBalancerConfigsQueryParams;
    security: GetNodeBalancerConfigsSecurity;
}
export declare class GetNodeBalancerConfigsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNodeBalancerConfigs200ApplicationJsonObject?: GetNodeBalancerConfigs200ApplicationJson;
    getNodeBalancerConfigsDefaultApplicationJsonObject?: GetNodeBalancerConfigsDefaultApplicationJson;
}
