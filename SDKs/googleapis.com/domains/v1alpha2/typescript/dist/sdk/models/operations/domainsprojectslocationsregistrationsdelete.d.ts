import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DomainsProjectsLocationsRegistrationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsDeleteRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsDeletePathParams;
    queryParams: DomainsProjectsLocationsRegistrationsDeleteQueryParams;
    security: DomainsProjectsLocationsRegistrationsDeleteSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
