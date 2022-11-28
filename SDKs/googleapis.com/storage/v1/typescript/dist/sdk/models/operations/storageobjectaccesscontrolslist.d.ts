import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectAccessControlsListPathParams extends SpeakeasyBase {
    bucket: string;
    object: string;
}
export declare class StorageObjectAccessControlsListQueryParams extends SpeakeasyBase {
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
export declare class StorageObjectAccessControlsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsListSecurity extends SpeakeasyBase {
    option1?: StorageObjectAccessControlsListSecurityOption1;
    option2?: StorageObjectAccessControlsListSecurityOption2;
}
export declare class StorageObjectAccessControlsListRequest extends SpeakeasyBase {
    pathParams: StorageObjectAccessControlsListPathParams;
    queryParams: StorageObjectAccessControlsListQueryParams;
    security: StorageObjectAccessControlsListSecurity;
}
export declare class StorageObjectAccessControlsListResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControls?: shared.ObjectAccessControls;
    statusCode: number;
}
