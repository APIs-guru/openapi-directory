import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerFoldersTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudresourcemanagerFoldersTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerFoldersTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerFoldersTestIamPermissionsPathParams;
    queryParams: CloudresourcemanagerFoldersTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: CloudresourcemanagerFoldersTestIamPermissionsSecurity;
}
export declare class CloudresourcemanagerFoldersTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
