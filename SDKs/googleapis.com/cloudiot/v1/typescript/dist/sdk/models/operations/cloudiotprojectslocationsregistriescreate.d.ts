import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudiotProjectsLocationsRegistriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudiotProjectsLocationsRegistriesCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudiotProjectsLocationsRegistriesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudiotProjectsLocationsRegistriesCreateSecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesCreateSecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesCreateSecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesCreateRequest extends SpeakeasyBase {
    pathParams: CloudiotProjectsLocationsRegistriesCreatePathParams;
    queryParams: CloudiotProjectsLocationsRegistriesCreateQueryParams;
    request?: shared.DeviceRegistry;
    security: CloudiotProjectsLocationsRegistriesCreateSecurity;
}
export declare class CloudiotProjectsLocationsRegistriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    deviceRegistry?: shared.DeviceRegistry;
    statusCode: number;
}
