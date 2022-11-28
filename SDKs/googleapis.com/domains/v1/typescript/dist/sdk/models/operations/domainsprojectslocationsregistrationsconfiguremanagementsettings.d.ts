import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams extends SpeakeasyBase {
    registration: string;
}
export declare class DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsConfigureManagementSettingsQueryParams;
    request?: shared.ConfigureManagementSettingsRequestInput;
    security: DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
