import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageDefaultObjectAccessControlsGetPathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
}
export declare class StorageDefaultObjectAccessControlsGetQueryParams extends SpeakeasyBase {
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
export declare class StorageDefaultObjectAccessControlsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsGetSecurity extends SpeakeasyBase {
    option1?: StorageDefaultObjectAccessControlsGetSecurityOption1;
    option2?: StorageDefaultObjectAccessControlsGetSecurityOption2;
}
export declare class StorageDefaultObjectAccessControlsGetRequest extends SpeakeasyBase {
    pathParams: StorageDefaultObjectAccessControlsGetPathParams;
    queryParams: StorageDefaultObjectAccessControlsGetQueryParams;
    security: StorageDefaultObjectAccessControlsGetSecurity;
}
export declare class StorageDefaultObjectAccessControlsGetResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
}
