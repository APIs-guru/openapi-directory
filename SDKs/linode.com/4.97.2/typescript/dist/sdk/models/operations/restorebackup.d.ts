import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RestoreBackupPathParams extends SpeakeasyBase {
    backupId: number;
    linodeId: number;
}
export declare class RestoreBackupRequestBody extends SpeakeasyBase {
    linodeId: number;
    overwrite?: boolean;
}
export declare class RestoreBackupSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class RestoreBackupDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class RestoreBackupRequest extends SpeakeasyBase {
    pathParams: RestoreBackupPathParams;
    request: RestoreBackupRequestBody;
    security: RestoreBackupSecurity;
}
export declare class RestoreBackupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    restoreBackup200ApplicationJsonObject?: Map<string, any>;
    restoreBackupDefaultApplicationJsonObject?: RestoreBackupDefaultApplicationJson;
}
