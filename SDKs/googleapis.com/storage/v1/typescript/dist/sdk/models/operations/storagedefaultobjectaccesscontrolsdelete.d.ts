import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageDefaultObjectAccessControlsDeletePathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
}
export declare class StorageDefaultObjectAccessControlsDeleteQueryParams extends SpeakeasyBase {
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
export declare class StorageDefaultObjectAccessControlsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsDeleteSecurity extends SpeakeasyBase {
    option1?: StorageDefaultObjectAccessControlsDeleteSecurityOption1;
    option2?: StorageDefaultObjectAccessControlsDeleteSecurityOption2;
}
export declare class StorageDefaultObjectAccessControlsDeleteRequest extends SpeakeasyBase {
    pathParams: StorageDefaultObjectAccessControlsDeletePathParams;
    queryParams: StorageDefaultObjectAccessControlsDeleteQueryParams;
    security: StorageDefaultObjectAccessControlsDeleteSecurity;
}
export declare class StorageDefaultObjectAccessControlsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
