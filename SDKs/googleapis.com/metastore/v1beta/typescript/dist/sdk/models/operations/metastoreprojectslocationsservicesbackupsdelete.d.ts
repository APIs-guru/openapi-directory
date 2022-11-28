import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesBackupsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MetastoreProjectsLocationsServicesBackupsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
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
export declare class MetastoreProjectsLocationsServicesBackupsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesBackupsDeleteRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesBackupsDeletePathParams;
    queryParams: MetastoreProjectsLocationsServicesBackupsDeleteQueryParams;
    security: MetastoreProjectsLocationsServicesBackupsDeleteSecurity;
}
export declare class MetastoreProjectsLocationsServicesBackupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
