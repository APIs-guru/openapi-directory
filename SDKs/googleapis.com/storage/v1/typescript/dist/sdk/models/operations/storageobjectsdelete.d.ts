import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageObjectsDeletePathParams extends SpeakeasyBase {
    bucket: string;
    object: string;
}
export declare class StorageObjectsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    ifGenerationMatch?: string;
    ifGenerationNotMatch?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsDeleteSecurity extends SpeakeasyBase {
    option1?: StorageObjectsDeleteSecurityOption1;
    option2?: StorageObjectsDeleteSecurityOption2;
    option3?: StorageObjectsDeleteSecurityOption3;
}
export declare class StorageObjectsDeleteRequest extends SpeakeasyBase {
    pathParams: StorageObjectsDeletePathParams;
    queryParams: StorageObjectsDeleteQueryParams;
    security: StorageObjectsDeleteSecurity;
}
export declare class StorageObjectsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
