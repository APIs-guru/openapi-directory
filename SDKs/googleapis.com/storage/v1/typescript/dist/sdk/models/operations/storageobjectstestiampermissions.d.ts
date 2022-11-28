import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectsTestIamPermissionsPathParams extends SpeakeasyBase {
    bucket: string;
    object: string;
}
export declare class StorageObjectsTestIamPermissionsQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    key?: string;
    oauthToken?: string;
    permissions: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsTestIamPermissionsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsTestIamPermissionsSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: StorageObjectsTestIamPermissionsSecurityOption1;
    option2?: StorageObjectsTestIamPermissionsSecurityOption2;
    option3?: StorageObjectsTestIamPermissionsSecurityOption3;
    option4?: StorageObjectsTestIamPermissionsSecurityOption4;
    option5?: StorageObjectsTestIamPermissionsSecurityOption5;
}
export declare class StorageObjectsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: StorageObjectsTestIamPermissionsPathParams;
    queryParams: StorageObjectsTestIamPermissionsQueryParams;
    security: StorageObjectsTestIamPermissionsSecurity;
}
export declare class StorageObjectsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
