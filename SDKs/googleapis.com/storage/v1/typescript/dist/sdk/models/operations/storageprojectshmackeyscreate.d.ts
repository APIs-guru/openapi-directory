import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageProjectsHmacKeysCreatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class StorageProjectsHmacKeysCreateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceAccountEmail: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageProjectsHmacKeysCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysCreateSecurity extends SpeakeasyBase {
    option1?: StorageProjectsHmacKeysCreateSecurityOption1;
    option2?: StorageProjectsHmacKeysCreateSecurityOption2;
}
export declare class StorageProjectsHmacKeysCreateRequest extends SpeakeasyBase {
    pathParams: StorageProjectsHmacKeysCreatePathParams;
    queryParams: StorageProjectsHmacKeysCreateQueryParams;
    security: StorageProjectsHmacKeysCreateSecurity;
}
export declare class StorageProjectsHmacKeysCreateResponse extends SpeakeasyBase {
    contentType: string;
    hmacKey?: shared.HmacKey;
    statusCode: number;
}
