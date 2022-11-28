import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectAccessControlsGetPathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
    object: string;
}
export declare class StorageObjectAccessControlsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageObjectAccessControlsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectAccessControlsGetRequest extends SpeakeasyBase {
    pathParams: StorageObjectAccessControlsGetPathParams;
    queryParams: StorageObjectAccessControlsGetQueryParams;
    security: StorageObjectAccessControlsGetSecurity;
}
export declare class StorageObjectAccessControlsGetResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
}
