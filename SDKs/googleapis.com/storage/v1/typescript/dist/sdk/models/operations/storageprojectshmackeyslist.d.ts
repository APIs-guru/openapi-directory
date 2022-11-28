import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageProjectsHmacKeysListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class StorageProjectsHmacKeysListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceAccountEmail?: string;
    showDeletedKeys?: boolean;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageProjectsHmacKeysListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysListSecurity extends SpeakeasyBase {
    option1?: StorageProjectsHmacKeysListSecurityOption1;
    option2?: StorageProjectsHmacKeysListSecurityOption2;
    option3?: StorageProjectsHmacKeysListSecurityOption3;
    option4?: StorageProjectsHmacKeysListSecurityOption4;
}
export declare class StorageProjectsHmacKeysListRequest extends SpeakeasyBase {
    pathParams: StorageProjectsHmacKeysListPathParams;
    queryParams: StorageProjectsHmacKeysListQueryParams;
    security: StorageProjectsHmacKeysListSecurity;
}
export declare class StorageProjectsHmacKeysListResponse extends SpeakeasyBase {
    contentType: string;
    hmacKeysMetadata?: shared.HmacKeysMetadata;
    statusCode: number;
}
