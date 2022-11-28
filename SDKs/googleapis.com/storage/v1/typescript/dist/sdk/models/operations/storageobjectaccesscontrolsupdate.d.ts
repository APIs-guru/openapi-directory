import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectAccessControlsUpdatePathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
    object: string;
}
export declare class StorageObjectAccessControlsUpdateQueryParams extends SpeakeasyBase {
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
export declare class StorageObjectAccessControlsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsUpdateSecurity extends SpeakeasyBase {
    option1?: StorageObjectAccessControlsUpdateSecurityOption1;
    option2?: StorageObjectAccessControlsUpdateSecurityOption2;
}
export declare class StorageObjectAccessControlsUpdateRequest extends SpeakeasyBase {
    pathParams: StorageObjectAccessControlsUpdatePathParams;
    queryParams: StorageObjectAccessControlsUpdateQueryParams;
    request?: shared.ObjectAccessControl;
    security: StorageObjectAccessControlsUpdateSecurity;
}
export declare class StorageObjectAccessControlsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
}
