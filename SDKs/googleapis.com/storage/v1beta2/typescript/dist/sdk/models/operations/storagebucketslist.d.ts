import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StorageBucketsListProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageBucketsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    project: string;
    projection?: StorageBucketsListProjectionEnum;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageBucketsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsListSecurity extends SpeakeasyBase {
    option1?: StorageBucketsListSecurityOption1;
    option2?: StorageBucketsListSecurityOption2;
    option3?: StorageBucketsListSecurityOption3;
}
export declare class StorageBucketsListRequest extends SpeakeasyBase {
    queryParams: StorageBucketsListQueryParams;
    security: StorageBucketsListSecurity;
}
export declare class StorageBucketsListResponse extends SpeakeasyBase {
    buckets?: shared.Buckets;
    contentType: string;
    statusCode: number;
}
