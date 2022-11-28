import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketsTestIamPermissionsPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageBucketsTestIamPermissionsQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    permissions: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageBucketsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsTestIamPermissionsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsTestIamPermissionsSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsTestIamPermissionsSecurity extends SpeakeasyBase {
    option1?: StorageBucketsTestIamPermissionsSecurityOption1;
    option2?: StorageBucketsTestIamPermissionsSecurityOption2;
    option3?: StorageBucketsTestIamPermissionsSecurityOption3;
    option4?: StorageBucketsTestIamPermissionsSecurityOption4;
    option5?: StorageBucketsTestIamPermissionsSecurityOption5;
}
export declare class StorageBucketsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: StorageBucketsTestIamPermissionsPathParams;
    queryParams: StorageBucketsTestIamPermissionsQueryParams;
    security: StorageBucketsTestIamPermissionsSecurity;
}
export declare class StorageBucketsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
