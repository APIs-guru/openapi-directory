import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesDevicesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesDeleteSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesDevicesDeleteSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesDeleteRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesDevicesDeletePathParams;
    queryParams: CloudiotProjectsLocationsRegistriesDevicesDeleteQueryParams;
    security: CloudiotProjectsLocationsRegistriesDevicesDeleteSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesDevicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
