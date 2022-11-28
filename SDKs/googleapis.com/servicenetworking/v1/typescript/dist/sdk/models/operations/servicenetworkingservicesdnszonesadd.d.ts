import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesDnsZonesAddPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesDnsZonesAddQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesDnsZonesAddSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsZonesAddSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsZonesAddSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesDnsZonesAddSecurityOption1;
    option2?: ServicenetworkingServicesDnsZonesAddSecurityOption2;
}
export declare class ServicenetworkingServicesDnsZonesAddRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesDnsZonesAddPathParams;
    queryParams: ServicenetworkingServicesDnsZonesAddQueryParams;
    request?: shared.AddDnsZoneRequest;
    security: ServicenetworkingServicesDnsZonesAddSecurity;
}
export declare class ServicenetworkingServicesDnsZonesAddResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
