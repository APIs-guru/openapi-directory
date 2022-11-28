import { SpeakeasyBase } from "../../../internal/utils";
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
    userIp?: string;
}
export declare class StorageDefaultObjectAccessControlsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
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
