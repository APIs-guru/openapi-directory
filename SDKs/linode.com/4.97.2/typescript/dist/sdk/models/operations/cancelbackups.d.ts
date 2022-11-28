import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelBackupsPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class CancelBackupsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CancelBackupsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CancelBackupsRequest extends SpeakeasyBase {
    pathParams: CancelBackupsPathParams;
    security: CancelBackupsSecurity;
}
export declare class CancelBackupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cancelBackups200ApplicationJsonObject?: Map<string, any>;
    cancelBackupsDefaultApplicationJsonObject?: CancelBackupsDefaultApplicationJson;
}
