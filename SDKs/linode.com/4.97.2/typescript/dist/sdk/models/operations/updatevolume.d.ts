import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVolumePathParams extends SpeakeasyBase {
    volumeId: number;
}
export declare class UpdateVolumeRequestBodyInput extends SpeakeasyBase {
    label: string;
    tags?: string[];
}
export declare class UpdateVolumeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateVolumeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateVolumeRequest extends SpeakeasyBase {
    pathParams: UpdateVolumePathParams;
    request: UpdateVolumeRequestBodyInput;
    security: UpdateVolumeSecurity;
}
export declare class UpdateVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume?: shared.Volume;
    updateVolumeDefaultApplicationJsonObject?: UpdateVolumeDefaultApplicationJson;
}
