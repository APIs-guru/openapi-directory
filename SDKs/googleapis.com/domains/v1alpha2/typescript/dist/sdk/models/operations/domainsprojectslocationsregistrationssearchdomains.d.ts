import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsSearchDomainsPathParams extends SpeakeasyBase {
    location: string;
}
export declare class DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DomainsProjectsLocationsRegistrationsSearchDomainsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsSearchDomainsRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsSearchDomainsPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams;
    security: DomainsProjectsLocationsRegistrationsSearchDomainsSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsSearchDomainsResponse extends SpeakeasyBase {
    contentType: string;
    searchDomainsResponse?: shared.SearchDomainsResponse;
    statusCode: number;
}
