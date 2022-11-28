import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams extends SpeakeasyBase {
    registration: string;
}
export declare class DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsConfigureContactSettingsQueryParams;
    request?: shared.ConfigureContactSettingsRequest;
    security: DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
