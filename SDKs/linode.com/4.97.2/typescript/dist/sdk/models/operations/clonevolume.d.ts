import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloneVolumePathParams extends SpeakeasyBase {
    volumeId: number;
}
export declare class CloneVolumeRequestBody extends SpeakeasyBase {
    label: string;
}
export declare class CloneVolumeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CloneVolumeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CloneVolumeRequest extends SpeakeasyBase {
    pathParams: CloneVolumePathParams;
    request: CloneVolumeRequestBody;
    security: CloneVolumeSecurity;
}
export declare class CloneVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume?: shared.Volume;
    cloneVolumeDefaultApplicationJsonObject?: CloneVolumeDefaultApplicationJson;
}
