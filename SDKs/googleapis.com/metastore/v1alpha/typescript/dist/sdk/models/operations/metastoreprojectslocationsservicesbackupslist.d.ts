import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesBackupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MetastoreProjectsLocationsServicesBackupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MetastoreProjectsLocationsServicesBackupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesBackupsListRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesBackupsListPathParams;
    queryParams: MetastoreProjectsLocationsServicesBackupsListQueryParams;
    security: MetastoreProjectsLocationsServicesBackupsListSecurity;
}
export declare class MetastoreProjectsLocationsServicesBackupsListResponse extends SpeakeasyBase {
    contentType: string;
    listBackupsResponse?: shared.ListBackupsResponse;
    statusCode: number;
}
