import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesDevicesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fieldMask?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesGetSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesGetRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesDevicesGetPathParams;
    queryParams: CloudiotProjectsLocationsRegistriesDevicesGetQueryParams;
    security: CloudiotProjectsLocationsRegistriesDevicesGetSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesGetResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
