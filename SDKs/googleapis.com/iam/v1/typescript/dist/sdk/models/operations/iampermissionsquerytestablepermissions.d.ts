import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamPermissionsQueryTestablePermissionsQueryParams extends SpeakeasyBase {
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
export declare class IamPermissionsQueryTestablePermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamPermissionsQueryTestablePermissionsRequest extends SpeakeasyBase {
    queryParams: IamPermissionsQueryTestablePermissionsQueryParams;
    request?: shared.QueryTestablePermissionsRequest;
    security: IamPermissionsQueryTestablePermissionsSecurity;
}
export declare class IamPermissionsQueryTestablePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    queryTestablePermissionsResponse?: shared.QueryTestablePermissionsResponse;
    statusCode: number;
}
