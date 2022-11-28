import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageProjectsHmacKeysUpdatePathParams extends SpeakeasyBase {
    accessId: string;
    projectId: string;
}
export declare class StorageProjectsHmacKeysUpdateQueryParams extends SpeakeasyBase {
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
export declare class StorageProjectsHmacKeysUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsHmacKeysUpdateSecurity extends SpeakeasyBase {
    option1?: StorageProjectsHmacKeysUpdateSecurityOption1;
    option2?: StorageProjectsHmacKeysUpdateSecurityOption2;
}
export declare class StorageProjectsHmacKeysUpdateRequest extends SpeakeasyBase {
    pathParams: StorageProjectsHmacKeysUpdatePathParams;
    queryParams: StorageProjectsHmacKeysUpdateQueryParams;
    request?: shared.HmacKeyMetadata;
    security: StorageProjectsHmacKeysUpdateSecurity;
}
export declare class StorageProjectsHmacKeysUpdateResponse extends SpeakeasyBase {
    contentType: string;
    hmacKeyMetadata?: shared.HmacKeyMetadata;
    statusCode: number;
}
