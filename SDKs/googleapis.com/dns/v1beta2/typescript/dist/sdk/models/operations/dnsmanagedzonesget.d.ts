import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZonesGetPathParams extends SpeakeasyBase {
    managedZone: string;
    project: string;
}
export declare class DnsManagedZonesGetQueryParams extends SpeakeasyBase {
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
export declare class DnsManagedZonesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesGetSecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesGetSecurityOption1;
    option2?: DnsManagedZonesGetSecurityOption2;
    option3?: DnsManagedZonesGetSecurityOption3;
    option4?: DnsManagedZonesGetSecurityOption4;
}
export declare class DnsManagedZonesGetRequest extends SpeakeasyBase {
    pathParams: DnsManagedZonesGetPathParams;
    queryParams: DnsManagedZonesGetQueryParams;
    security: DnsManagedZonesGetSecurity;
}
export declare class DnsManagedZonesGetResponse extends SpeakeasyBase {
    contentType: string;
    managedZone?: shared.ManagedZone;
    statusCode: number;
}
