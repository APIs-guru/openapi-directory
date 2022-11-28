import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class MlProjectsModelsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsModelsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsTestIamPermissionsPathParams;
    queryParams: MlProjectsModelsTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: MlProjectsModelsTestIamPermissionsSecurity;
}
export declare class MlProjectsModelsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
}
