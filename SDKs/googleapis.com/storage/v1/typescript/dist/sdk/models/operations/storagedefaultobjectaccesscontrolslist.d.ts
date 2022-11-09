import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageDefaultObjectAccessControlsListPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageDefaultObjectAccessControlsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
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
export declare class StorageDefaultObjectAccessControlsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsListSecurity extends SpeakeasyBase {
    option1?: StorageDefaultObjectAccessControlsListSecurityOption1;
    option2?: StorageDefaultObjectAccessControlsListSecurityOption2;
}
export declare class StorageDefaultObjectAccessControlsListRequest extends SpeakeasyBase {
    pathParams: StorageDefaultObjectAccessControlsListPathParams;
    queryParams: StorageDefaultObjectAccessControlsListQueryParams;
    security: StorageDefaultObjectAccessControlsListSecurity;
}
export declare class StorageDefaultObjectAccessControlsListResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControls?: shared.ObjectAccessControls;
    statusCode: number;
}
