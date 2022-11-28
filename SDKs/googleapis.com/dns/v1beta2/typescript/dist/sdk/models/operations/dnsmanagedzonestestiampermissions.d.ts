import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZonesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DnsManagedZonesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class DnsManagedZonesTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesTestIamPermissionsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesTestIamPermissionsSecurityOption1;
    option2?: DnsManagedZonesTestIamPermissionsSecurityOption2;
    option3?: DnsManagedZonesTestIamPermissionsSecurityOption3;
    option4?: DnsManagedZonesTestIamPermissionsSecurityOption4;
}
export declare class DnsManagedZonesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: DnsManagedZonesTestIamPermissionsPathParams;
    queryParams: DnsManagedZonesTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: DnsManagedZonesTestIamPermissionsSecurity;
}
export declare class DnsManagedZonesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
}
