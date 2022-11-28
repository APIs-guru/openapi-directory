import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZonesUpdatePathParams extends SpeakeasyBase {
    location: string;
    managedZone: string;
    project: string;
}
export declare class DnsManagedZonesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DnsManagedZonesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesUpdateSecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesUpdateSecurityOption1;
    option2?: DnsManagedZonesUpdateSecurityOption2;
}
export declare class DnsManagedZonesUpdateRequest extends SpeakeasyBase {
    pathParams: DnsManagedZonesUpdatePathParams;
    queryParams: DnsManagedZonesUpdateQueryParams;
    request?: shared.ManagedZone;
    security: DnsManagedZonesUpdateSecurity;
}
export declare class DnsManagedZonesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
