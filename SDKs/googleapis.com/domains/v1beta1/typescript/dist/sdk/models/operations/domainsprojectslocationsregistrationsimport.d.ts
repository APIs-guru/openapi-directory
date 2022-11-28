import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DomainsProjectsLocationsRegistrationsImportQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsImportRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsImportPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsImportQueryParams;
    request?: shared.ImportDomainRequest;
    security: DomainsProjectsLocationsRegistrationsImportSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsImportResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
