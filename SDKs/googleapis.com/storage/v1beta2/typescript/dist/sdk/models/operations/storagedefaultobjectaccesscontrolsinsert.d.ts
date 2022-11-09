import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageDefaultObjectAccessControlsInsertPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageDefaultObjectAccessControlsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageDefaultObjectAccessControlsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsInsertRequest extends SpeakeasyBase {
    pathParams: StorageDefaultObjectAccessControlsInsertPathParams;
    queryParams: StorageDefaultObjectAccessControlsInsertQueryParams;
    request?: shared.ObjectAccessControl;
    security: StorageDefaultObjectAccessControlsInsertSecurity;
}
export declare class StorageDefaultObjectAccessControlsInsertResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
}
