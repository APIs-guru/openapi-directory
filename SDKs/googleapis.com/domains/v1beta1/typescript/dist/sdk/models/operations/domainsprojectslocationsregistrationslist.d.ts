import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DomainsProjectsLocationsRegistrationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DomainsProjectsLocationsRegistrationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsListRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsListPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsListQueryParams;
    security: DomainsProjectsLocationsRegistrationsListSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsListResponse extends SpeakeasyBase {
    contentType: string;
    listRegistrationsResponse?: shared.ListRegistrationsResponse;
    statusCode: number;
}
