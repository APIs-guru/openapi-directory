import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectAccessControlsDeletePathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
    object: string;
}
export declare class StorageObjectAccessControlsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageObjectAccessControlsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsDeleteRequest extends SpeakeasyBase {
    pathParams: StorageObjectAccessControlsDeletePathParams;
    queryParams: StorageObjectAccessControlsDeleteQueryParams;
    security: StorageObjectAccessControlsDeleteSecurity;
}
export declare class StorageObjectAccessControlsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
