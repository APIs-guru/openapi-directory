import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZonesPatchPathParams extends SpeakeasyBase {
    managedZone: string;
    project: string;
}
export declare class DnsManagedZonesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientOperationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsManagedZonesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesPatchSecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesPatchSecurityOption1;
    option2?: DnsManagedZonesPatchSecurityOption2;
}
export declare class DnsManagedZonesPatchRequest extends SpeakeasyBase {
    pathParams: DnsManagedZonesPatchPathParams;
    queryParams: DnsManagedZonesPatchQueryParams;
    request?: shared.ManagedZone;
    security: DnsManagedZonesPatchSecurity;
}
export declare class DnsManagedZonesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
