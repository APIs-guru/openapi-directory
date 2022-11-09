import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesBackupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MetastoreProjectsLocationsServicesBackupsCreateQueryParams extends SpeakeasyBase {
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
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MetastoreProjectsLocationsServicesBackupsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesBackupsCreateRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesBackupsCreatePathParams;
    queryParams: MetastoreProjectsLocationsServicesBackupsCreateQueryParams;
    request?: shared.Backup;
    security: MetastoreProjectsLocationsServicesBackupsCreateSecurity;
}
export declare class MetastoreProjectsLocationsServicesBackupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
