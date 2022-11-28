import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableBackupsPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class EnableBackupsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class EnableBackupsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class EnableBackupsRequest extends SpeakeasyBase {
    pathParams: EnableBackupsPathParams;
    security: EnableBackupsSecurity;
}
export declare class EnableBackupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enableBackups200ApplicationJsonObject?: Map<string, any>;
    enableBackupsDefaultApplicationJsonObject?: EnableBackupsDefaultApplicationJson;
}
