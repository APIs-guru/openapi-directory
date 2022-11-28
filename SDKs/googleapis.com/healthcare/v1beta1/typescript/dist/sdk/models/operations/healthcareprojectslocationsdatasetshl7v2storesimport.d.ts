import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresImportPathParams extends SpeakeasyBase {
    name: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresImportPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams;
    request?: shared.ImportMessagesRequest;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
