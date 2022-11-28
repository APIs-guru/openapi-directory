import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodeBalancersQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetNodeBalancersSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetNodeBalancers200ApplicationJson extends SpeakeasyBase {
    data?: shared.NodeBalancer[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetNodeBalancersDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetNodeBalancersRequest extends SpeakeasyBase {
    queryParams: GetNodeBalancersQueryParams;
    security: GetNodeBalancersSecurity;
}
export declare class GetNodeBalancersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNodeBalancers200ApplicationJsonObject?: GetNodeBalancers200ApplicationJson;
    getNodeBalancersDefaultApplicationJsonObject?: GetNodeBalancersDefaultApplicationJson;
}
