import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBackupPathParams extends SpeakeasyBase {
    backupId: number;
    linodeId: number;
}
export declare class GetBackupSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetBackupDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetBackupRequest extends SpeakeasyBase {
    pathParams: GetBackupPathParams;
    security: GetBackupSecurity;
}
export declare class GetBackupResponse extends SpeakeasyBase {
    backup?: shared.Backup;
    contentType: string;
    statusCode: number;
    getBackupDefaultApplicationJsonObject?: GetBackupDefaultApplicationJson;
}
