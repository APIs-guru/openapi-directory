import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeVolumesPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetLinodeVolumesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetLinodeVolumesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeVolumes200ApplicationJson extends SpeakeasyBase {
    data?: shared.Volume[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLinodeVolumesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeVolumesRequest extends SpeakeasyBase {
    pathParams: GetLinodeVolumesPathParams;
    queryParams: GetLinodeVolumesQueryParams;
    security: GetLinodeVolumesSecurity;
}
export declare class GetLinodeVolumesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinodeVolumes200ApplicationJsonObject?: GetLinodeVolumes200ApplicationJson;
    getLinodeVolumesDefaultApplicationJsonObject?: GetLinodeVolumesDefaultApplicationJson;
}
