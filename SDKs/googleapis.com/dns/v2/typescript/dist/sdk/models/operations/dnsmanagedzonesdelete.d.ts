import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZonesDeletePathParams extends SpeakeasyBase {
    location: string;
    managedZone: string;
    project: string;
}
export declare class DnsManagedZonesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DnsManagedZonesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesDeleteSecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesDeleteSecurityOption1;
    option2?: DnsManagedZonesDeleteSecurityOption2;
}
export declare class DnsManagedZonesDeleteRequest extends SpeakeasyBase {
    pathParams: DnsManagedZonesDeletePathParams;
    queryParams: DnsManagedZonesDeleteQueryParams;
    security: DnsManagedZonesDeleteSecurity;
}
export declare class DnsManagedZonesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
