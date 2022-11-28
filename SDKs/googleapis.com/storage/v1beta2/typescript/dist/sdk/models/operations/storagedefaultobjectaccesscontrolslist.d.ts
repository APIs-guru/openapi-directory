import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageDefaultObjectAccessControlsListPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageDefaultObjectAccessControlsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageDefaultObjectAccessControlsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsListRequest extends SpeakeasyBase {
    pathParams: StorageDefaultObjectAccessControlsListPathParams;
    queryParams: StorageDefaultObjectAccessControlsListQueryParams;
    security: StorageDefaultObjectAccessControlsListSecurity;
}
export declare class StorageDefaultObjectAccessControlsListResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControls?: shared.ObjectAccessControls;
    statusCode: number;
}
