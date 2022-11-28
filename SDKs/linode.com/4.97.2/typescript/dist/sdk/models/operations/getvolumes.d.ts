import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVolumesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetVolumesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetVolumes200ApplicationJson extends SpeakeasyBase {
    data?: shared.Volume[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetVolumesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetVolumesRequest extends SpeakeasyBase {
    queryParams: GetVolumesQueryParams;
    security: GetVolumesSecurity;
}
export declare class GetVolumesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVolumes200ApplicationJsonObject?: GetVolumes200ApplicationJson;
    getVolumesDefaultApplicationJsonObject?: GetVolumesDefaultApplicationJson;
}
