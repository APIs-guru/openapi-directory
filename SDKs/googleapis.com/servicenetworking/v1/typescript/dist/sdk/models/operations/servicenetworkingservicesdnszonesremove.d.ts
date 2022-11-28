import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesDnsZonesRemovePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesDnsZonesRemoveQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesDnsZonesRemoveSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsZonesRemoveSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsZonesRemoveSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesDnsZonesRemoveSecurityOption1;
    option2?: ServicenetworkingServicesDnsZonesRemoveSecurityOption2;
}
export declare class ServicenetworkingServicesDnsZonesRemoveRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesDnsZonesRemovePathParams;
    queryParams: ServicenetworkingServicesDnsZonesRemoveQueryParams;
    request?: shared.RemoveDnsZoneRequest;
    security: ServicenetworkingServicesDnsZonesRemoveSecurity;
}
export declare class ServicenetworkingServicesDnsZonesRemoveResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
