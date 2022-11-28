import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesDevicesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesCreateSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesCreateRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesDevicesCreatePathParams;
    queryParams: CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams;
    request?: shared.Device;
    security: CloudiotProjectsLocationsRegistriesDevicesCreateSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
