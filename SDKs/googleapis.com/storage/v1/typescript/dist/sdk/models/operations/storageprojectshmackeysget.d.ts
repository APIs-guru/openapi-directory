import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageProjectsHmacKeysGetPathParams extends SpeakeasyBase {
    accessId: string;
    projectId: string;
}
export declare class StorageProjectsHmacKeysGetQueryParams extends SpeakeasyBase {
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
export declare class StorageProjectsHmacKeysGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysGetSecurity extends SpeakeasyBase {
    option1?: StorageProjectsHmacKeysGetSecurityOption1;
    option2?: StorageProjectsHmacKeysGetSecurityOption2;
    option3?: StorageProjectsHmacKeysGetSecurityOption3;
    option4?: StorageProjectsHmacKeysGetSecurityOption4;
}
export declare class StorageProjectsHmacKeysGetRequest extends SpeakeasyBase {
    pathParams: StorageProjectsHmacKeysGetPathParams;
    queryParams: StorageProjectsHmacKeysGetQueryParams;
    security: StorageProjectsHmacKeysGetSecurity;
}
export declare class StorageProjectsHmacKeysGetResponse extends SpeakeasyBase {
    contentType: string;
    hmacKeyMetadata?: shared.HmacKeyMetadata;
    statusCode: number;
}
