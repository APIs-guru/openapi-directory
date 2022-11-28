import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsConfigureDnsSettingsPathParams extends SpeakeasyBase {
    registration: string;
}
export declare class DomainsProjectsLocationsRegistrationsConfigureDnsSettingsQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsConfigureDnsSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsConfigureDnsSettingsPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsConfigureDnsSettingsQueryParams;
    request?: shared.ConfigureDnsSettingsRequestInput;
    security: DomainsProjectsLocationsRegistrationsConfigureDnsSettingsSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsConfigureDnsSettingsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
