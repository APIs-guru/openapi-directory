import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeDisksPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetLinodeDisksQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetLinodeDisksSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeDisks200ApplicationJson extends SpeakeasyBase {
    data?: shared.Disk[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLinodeDisksDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeDisksRequest extends SpeakeasyBase {
    pathParams: GetLinodeDisksPathParams;
    queryParams: GetLinodeDisksQueryParams;
    security: GetLinodeDisksSecurity;
}
export declare class GetLinodeDisksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinodeDisks200ApplicationJsonObject?: GetLinodeDisks200ApplicationJson;
    getLinodeDisksDefaultApplicationJsonObject?: GetLinodeDisksDefaultApplicationJson;
}
