import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeConfigsPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetLinodeConfigsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetLinodeConfigsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeConfigs200ApplicationJson extends SpeakeasyBase {
    data?: shared.LinodeConfig[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLinodeConfigsRequest extends SpeakeasyBase {
    pathParams: GetLinodeConfigsPathParams;
    queryParams: GetLinodeConfigsQueryParams;
    security: GetLinodeConfigsSecurity;
}
export declare class GetLinodeConfigsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinodeConfigs200ApplicationJsonObject?: GetLinodeConfigs200ApplicationJson;
}
