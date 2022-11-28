import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsBackupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FileProjectsLocationsBackupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    backupId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FileProjectsLocationsBackupsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsBackupsCreateRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsBackupsCreatePathParams;
    queryParams: FileProjectsLocationsBackupsCreateQueryParams;
    request?: shared.BackupInput;
    security: FileProjectsLocationsBackupsCreateSecurity;
}
export declare class FileProjectsLocationsBackupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
