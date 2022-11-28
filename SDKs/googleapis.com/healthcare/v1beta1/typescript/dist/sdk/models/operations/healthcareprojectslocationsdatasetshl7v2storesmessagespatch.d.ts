import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams;
    request?: shared.MessageInput;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
