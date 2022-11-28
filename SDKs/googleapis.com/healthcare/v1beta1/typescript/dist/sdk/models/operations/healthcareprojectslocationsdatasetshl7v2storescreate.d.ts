import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    hl7V2StoreId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresCreateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresCreatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresCreateQueryParams;
    request?: shared.Hl7V2Store;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresCreateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresCreateResponse extends SpeakeasyBase {
    contentType: string;
    hl7V2Store?: shared.Hl7V2Store;
    statusCode: number;
}
