import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectAccessControlsPatchPathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
    object: string;
}
export declare class StorageObjectAccessControlsPatchQueryParams extends SpeakeasyBase {
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
export declare class StorageObjectAccessControlsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsPatchSecurity extends SpeakeasyBase {
    option1?: StorageObjectAccessControlsPatchSecurityOption1;
    option2?: StorageObjectAccessControlsPatchSecurityOption2;
}
export declare class StorageObjectAccessControlsPatchRequest extends SpeakeasyBase {
    pathParams: StorageObjectAccessControlsPatchPathParams;
    queryParams: StorageObjectAccessControlsPatchQueryParams;
    request?: shared.ObjectAccessControl;
    security: StorageObjectAccessControlsPatchSecurity;
}
export declare class StorageObjectAccessControlsPatchResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
}
