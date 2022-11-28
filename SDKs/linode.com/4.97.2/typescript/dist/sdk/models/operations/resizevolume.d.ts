import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResizeVolumePathParams extends SpeakeasyBase {
    volumeId: number;
}
export declare class ResizeVolumeRequestBody extends SpeakeasyBase {
    size: number;
}
export declare class ResizeVolumeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ResizeVolumeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ResizeVolumeRequest extends SpeakeasyBase {
    pathParams: ResizeVolumePathParams;
    request: ResizeVolumeRequestBody;
    security: ResizeVolumeSecurity;
}
export declare class ResizeVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    resizeVolume200ApplicationJsonObject?: Map<string, any>;
    resizeVolumeDefaultApplicationJsonObject?: ResizeVolumeDefaultApplicationJson;
}
