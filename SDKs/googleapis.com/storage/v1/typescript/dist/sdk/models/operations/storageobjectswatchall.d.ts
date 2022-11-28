import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectsWatchAllPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare enum StorageObjectsWatchAllProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsWatchAllQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    delimiter?: string;
    endOffset?: string;
    fields?: string;
    includeTrailingDelimiter?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prefix?: string;
    prettyPrint?: boolean;
    projection?: StorageObjectsWatchAllProjectionEnum;
    quotaUser?: string;
    startOffset?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
    versions?: boolean;
}
export declare class StorageObjectsWatchAllSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsWatchAllSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsWatchAllSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsWatchAllSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsWatchAllSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsWatchAllSecurity extends SpeakeasyBase {
    option1?: StorageObjectsWatchAllSecurityOption1;
    option2?: StorageObjectsWatchAllSecurityOption2;
    option3?: StorageObjectsWatchAllSecurityOption3;
    option4?: StorageObjectsWatchAllSecurityOption4;
    option5?: StorageObjectsWatchAllSecurityOption5;
}
export declare class StorageObjectsWatchAllRequest extends SpeakeasyBase {
    pathParams: StorageObjectsWatchAllPathParams;
    queryParams: StorageObjectsWatchAllQueryParams;
    request?: shared.Channel;
    security: StorageObjectsWatchAllSecurity;
}
export declare class StorageObjectsWatchAllResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
