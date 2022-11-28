import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsExportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DomainsProjectsLocationsRegistrationsExportQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsExportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsExportRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsExportPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsExportQueryParams;
    request?: Map<string, any>;
    security: DomainsProjectsLocationsRegistrationsExportSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsExportResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
