import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDiskPathParams extends SpeakeasyBase {
    diskId: number;
    linodeId: number;
}
export declare class UpdateDiskSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateDiskDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateDiskRequest extends SpeakeasyBase {
    pathParams: UpdateDiskPathParams;
    request: shared.DiskInput;
    security: UpdateDiskSecurity;
}
export declare class UpdateDiskResponse extends SpeakeasyBase {
    contentType: string;
    disk?: shared.Disk;
    statusCode: number;
    updateDiskDefaultApplicationJsonObject?: UpdateDiskDefaultApplicationJson;
}
