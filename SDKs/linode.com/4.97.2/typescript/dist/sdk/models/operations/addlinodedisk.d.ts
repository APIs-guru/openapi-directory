import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddLinodeDiskPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class AddLinodeDiskSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AddLinodeDiskDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AddLinodeDiskRequest extends SpeakeasyBase {
    pathParams: AddLinodeDiskPathParams;
    request: shared.DiskRequest;
    security: AddLinodeDiskSecurity;
}
export declare class AddLinodeDiskResponse extends SpeakeasyBase {
    contentType: string;
    disk?: shared.Disk;
    statusCode: number;
    addLinodeDiskDefaultApplicationJsonObject?: AddLinodeDiskDefaultApplicationJson;
}
