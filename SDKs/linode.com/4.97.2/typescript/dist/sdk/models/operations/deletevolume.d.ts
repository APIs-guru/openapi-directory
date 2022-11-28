import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVolumePathParams extends SpeakeasyBase {
    volumeId: number;
}
export declare class DeleteVolumeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteVolumeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteVolumeRequest extends SpeakeasyBase {
    pathParams: DeleteVolumePathParams;
    security: DeleteVolumeSecurity;
}
export declare class DeleteVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteVolume200ApplicationJsonObject?: Map<string, any>;
    deleteVolumeDefaultApplicationJsonObject?: DeleteVolumeDefaultApplicationJson;
}
