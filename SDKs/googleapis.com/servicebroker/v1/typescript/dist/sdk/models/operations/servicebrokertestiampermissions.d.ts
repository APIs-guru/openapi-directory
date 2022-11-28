import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicebrokerTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: ServicebrokerTestIamPermissionsPathParams;
    queryParams: ServicebrokerTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: ServicebrokerTestIamPermissionsSecurity;
}
export declare class ServicebrokerTestIamPermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
