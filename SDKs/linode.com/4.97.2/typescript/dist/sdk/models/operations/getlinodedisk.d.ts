import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeDiskPathParams extends SpeakeasyBase {
    diskId: number;
    linodeId: number;
}
export declare class GetLinodeDiskSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeDiskDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeDiskRequest extends SpeakeasyBase {
    pathParams: GetLinodeDiskPathParams;
    security: GetLinodeDiskSecurity;
}
export declare class GetLinodeDiskResponse extends SpeakeasyBase {
    contentType: string;
    disk?: shared.Disk;
    statusCode: number;
    getLinodeDiskDefaultApplicationJsonObject?: GetLinodeDiskDefaultApplicationJson;
}
