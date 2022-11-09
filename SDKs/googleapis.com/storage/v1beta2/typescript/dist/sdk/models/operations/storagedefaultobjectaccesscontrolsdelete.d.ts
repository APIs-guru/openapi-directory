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
    userIp?: string;
}
export declare class StorageDefaultObjectAccessControlsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
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
