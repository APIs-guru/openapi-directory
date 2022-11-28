import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZonesCreatePathParams extends SpeakeasyBase {
    location: string;
    project: string;
}
export declare class DnsManagedZonesCreateQueryParams extends SpeakeasyBase {
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
export declare class DnsManagedZonesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesCreateSecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesCreateSecurityOption1;
    option2?: DnsManagedZonesCreateSecurityOption2;
}
export declare class DnsManagedZonesCreateRequest extends SpeakeasyBase {
    pathParams: DnsManagedZonesCreatePathParams;
    queryParams: DnsManagedZonesCreateQueryParams;
    request?: shared.ManagedZone;
    security: DnsManagedZonesCreateSecurity;
}
export declare class DnsManagedZonesCreateResponse extends SpeakeasyBase {
    contentType: string;
    managedZone?: shared.ManagedZone;
    statusCode: number;
}
