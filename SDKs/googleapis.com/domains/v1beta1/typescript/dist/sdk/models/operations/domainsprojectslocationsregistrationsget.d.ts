import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DomainsProjectsLocationsRegistrationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DomainsProjectsLocationsRegistrationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsGetRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsGetPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsGetQueryParams;
    security: DomainsProjectsLocationsRegistrationsGetSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsGetResponse extends SpeakeasyBase {
    contentType: string;
    registration?: shared.Registration;
    statusCode: number;
}
