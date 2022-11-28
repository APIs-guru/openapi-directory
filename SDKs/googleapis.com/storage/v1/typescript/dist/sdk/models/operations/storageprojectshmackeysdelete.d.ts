import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageProjectsHmacKeysDeletePathParams extends SpeakeasyBase {
    accessId: string;
    projectId: string;
}
export declare class StorageProjectsHmacKeysDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageProjectsHmacKeysDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysDeleteSecurity extends SpeakeasyBase {
    option1?: StorageProjectsHmacKeysDeleteSecurityOption1;
    option2?: StorageProjectsHmacKeysDeleteSecurityOption2;
    option3?: StorageProjectsHmacKeysDeleteSecurityOption3;
}
export declare class StorageProjectsHmacKeysDeleteRequest extends SpeakeasyBase {
    pathParams: StorageProjectsHmacKeysDeletePathParams;
    queryParams: StorageProjectsHmacKeysDeleteQueryParams;
    security: StorageProjectsHmacKeysDeleteSecurity;
}
export declare class StorageProjectsHmacKeysDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
