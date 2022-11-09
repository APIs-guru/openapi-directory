import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageDefaultObjectAccessControlsPatchPathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
}
export declare class StorageDefaultObjectAccessControlsPatchQueryParams extends SpeakeasyBase {
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
export declare class StorageDefaultObjectAccessControlsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsPatchSecurity extends SpeakeasyBase {
    option1?: StorageDefaultObjectAccessControlsPatchSecurityOption1;
    option2?: StorageDefaultObjectAccessControlsPatchSecurityOption2;
}
export declare class StorageDefaultObjectAccessControlsPatchRequest extends SpeakeasyBase {
    pathParams: StorageDefaultObjectAccessControlsPatchPathParams;
    queryParams: StorageDefaultObjectAccessControlsPatchQueryParams;
    request?: shared.ObjectAccessControl;
    security: StorageDefaultObjectAccessControlsPatchSecurity;
}
export declare class StorageDefaultObjectAccessControlsPatchResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
}
