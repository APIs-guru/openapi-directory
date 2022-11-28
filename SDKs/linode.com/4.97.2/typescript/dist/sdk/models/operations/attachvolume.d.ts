import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AttachVolumePathParams extends SpeakeasyBase {
    volumeId: number;
}
export declare class AttachVolumeRequestBody extends SpeakeasyBase {
    configId?: number;
    linodeId: number;
    persistAcrossBoots?: boolean;
}
export declare class AttachVolumeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AttachVolumeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AttachVolumeRequest extends SpeakeasyBase {
    pathParams: AttachVolumePathParams;
    request: AttachVolumeRequestBody;
    security: AttachVolumeSecurity;
}
export declare class AttachVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume?: shared.Volume;
    attachVolumeDefaultApplicationJsonObject?: AttachVolumeDefaultApplicationJson;
}
