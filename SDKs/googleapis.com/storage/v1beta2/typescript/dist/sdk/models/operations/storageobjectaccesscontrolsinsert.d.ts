import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectAccessControlsInsertPathParams extends SpeakeasyBase {
    bucket: string;
    object: string;
}
export declare class StorageObjectAccessControlsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageObjectAccessControlsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsInsertRequest extends SpeakeasyBase {
    pathParams: StorageObjectAccessControlsInsertPathParams;
    queryParams: StorageObjectAccessControlsInsertQueryParams;
    request?: shared.ObjectAccessControl;
    security: StorageObjectAccessControlsInsertSecurity;
}
export declare class StorageObjectAccessControlsInsertResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
}
