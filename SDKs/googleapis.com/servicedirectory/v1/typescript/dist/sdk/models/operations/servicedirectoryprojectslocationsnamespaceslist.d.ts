import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesListQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsNamespacesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesListRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesListPathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesListQueryParams;
    security: ServicedirectoryProjectsLocationsNamespacesListSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesListResponse extends SpeakeasyBase {
    contentType: string;
    listNamespacesResponse?: shared.ListNamespacesResponse;
    statusCode: number;
}
