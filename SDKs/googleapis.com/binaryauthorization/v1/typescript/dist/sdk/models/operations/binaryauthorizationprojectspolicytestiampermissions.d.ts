import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinaryauthorizationProjectsPolicyTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BinaryauthorizationProjectsPolicyTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BinaryauthorizationProjectsPolicyTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: BinaryauthorizationProjectsPolicyTestIamPermissionsPathParams;
    queryParams: BinaryauthorizationProjectsPolicyTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity;
}
export declare class BinaryauthorizationProjectsPolicyTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
