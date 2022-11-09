import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageDefaultObjectAccessControlsUpdatePathParams extends SpeakeasyBase {
    bucket: string;
    entity: string;
}
export declare class StorageDefaultObjectAccessControlsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageDefaultObjectAccessControlsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageDefaultObjectAccessControlsUpdateRequest extends SpeakeasyBase {
    pathParams: StorageDefaultObjectAccessControlsUpdatePathParams;
    queryParams: StorageDefaultObjectAccessControlsUpdateQueryParams;
    request?: shared.ObjectAccessControl;
    security: StorageDefaultObjectAccessControlsUpdateSecurity;
}
export declare class StorageDefaultObjectAccessControlsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
}
