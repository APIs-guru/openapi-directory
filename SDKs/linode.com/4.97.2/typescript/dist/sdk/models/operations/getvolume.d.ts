import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVolumePathParams extends SpeakeasyBase {
    volumeId: number;
}
export declare class GetVolumeQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetVolumeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetVolumeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetVolumeRequest extends SpeakeasyBase {
    pathParams: GetVolumePathParams;
    queryParams: GetVolumeQueryParams;
    security: GetVolumeSecurity;
}
export declare class GetVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume?: shared.Volume;
    getVolumeDefaultApplicationJsonObject?: GetVolumeDefaultApplicationJson;
}
