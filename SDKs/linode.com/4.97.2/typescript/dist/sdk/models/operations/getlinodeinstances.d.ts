import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeInstancesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetLinodeInstancesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeInstances200ApplicationJson extends SpeakeasyBase {
    data?: shared.Linode[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLinodeInstancesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeInstancesRequest extends SpeakeasyBase {
    queryParams: GetLinodeInstancesQueryParams;
    security: GetLinodeInstancesSecurity;
}
export declare class GetLinodeInstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinodeInstances200ApplicationJsonObject?: GetLinodeInstances200ApplicationJson;
    getLinodeInstancesDefaultApplicationJsonObject?: GetLinodeInstancesDefaultApplicationJson;
}
