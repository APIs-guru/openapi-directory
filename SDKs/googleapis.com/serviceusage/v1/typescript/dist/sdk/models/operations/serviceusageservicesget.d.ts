import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServiceusageServicesGetQueryParams extends SpeakeasyBase {
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
export declare class ServiceusageServicesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesGetSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesGetSecurityOption1;
    option2?: ServiceusageServicesGetSecurityOption2;
}
export declare class ServiceusageServicesGetRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesGetPathParams;
    queryParams: ServiceusageServicesGetQueryParams;
    security: ServiceusageServicesGetSecurity;
}
export declare class ServiceusageServicesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleApiServiceusageV1Service?: shared.GoogleApiServiceusageV1Service;
    statusCode: number;
}
