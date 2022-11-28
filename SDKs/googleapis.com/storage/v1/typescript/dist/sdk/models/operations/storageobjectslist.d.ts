import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectsListPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare enum StorageObjectsListProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsListQueryParams extends SpeakeasyBase {
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
    projection?: StorageObjectsListProjectionEnum;
    quotaUser?: string;
    startOffset?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
    versions?: boolean;
}
export declare class StorageObjectsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsListSecurity extends SpeakeasyBase {
    option1?: StorageObjectsListSecurityOption1;
    option2?: StorageObjectsListSecurityOption2;
    option3?: StorageObjectsListSecurityOption3;
    option4?: StorageObjectsListSecurityOption4;
    option5?: StorageObjectsListSecurityOption5;
}
export declare class StorageObjectsListRequest extends SpeakeasyBase {
    pathParams: StorageObjectsListPathParams;
    queryParams: StorageObjectsListQueryParams;
    security: StorageObjectsListSecurity;
}
export declare class StorageObjectsListResponse extends SpeakeasyBase {
    contentType: string;
    objects?: shared.Objects;
    statusCode: number;
}
