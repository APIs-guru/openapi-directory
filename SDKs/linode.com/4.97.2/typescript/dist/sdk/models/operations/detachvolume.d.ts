import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetachVolumePathParams extends SpeakeasyBase {
    volumeId: number;
}
export declare class DetachVolumeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DetachVolumeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DetachVolumeRequest extends SpeakeasyBase {
    pathParams: DetachVolumePathParams;
    security: DetachVolumeSecurity;
}
export declare class DetachVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    detachVolume200ApplicationJsonObject?: Map<string, any>;
    detachVolumeDefaultApplicationJsonObject?: DetachVolumeDefaultApplicationJson;
}
