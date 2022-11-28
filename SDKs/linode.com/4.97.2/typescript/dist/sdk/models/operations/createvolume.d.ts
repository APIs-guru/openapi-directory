import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVolumeRequestBody extends SpeakeasyBase {
    configId?: number;
    label?: string;
    linodeId?: number;
    region?: string;
    size?: number;
    tags?: string[];
}
export declare class CreateVolumeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateVolumeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateVolumeRequest extends SpeakeasyBase {
    request: CreateVolumeRequestBody;
    security: CreateVolumeSecurity;
}
export declare class CreateVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume?: shared.Volume;
    createVolumeDefaultApplicationJsonObject?: CreateVolumeDefaultApplicationJson;
}
