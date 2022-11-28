import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectAccessControlsDeletePathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
    object: string;
}
export declare class StorageObjectAccessControlsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectAccessControlsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsDeleteSecurity extends SpeakeasyBase {
    option1?: StorageObjectAccessControlsDeleteSecurityOption1;
    option2?: StorageObjectAccessControlsDeleteSecurityOption2;
}
export declare class StorageObjectAccessControlsDeleteRequest extends SpeakeasyBase {
    pathParams: StorageObjectAccessControlsDeletePathParams;
    queryParams: StorageObjectAccessControlsDeleteQueryParams;
    security: StorageObjectAccessControlsDeleteSecurity;
}
export declare class StorageObjectAccessControlsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
