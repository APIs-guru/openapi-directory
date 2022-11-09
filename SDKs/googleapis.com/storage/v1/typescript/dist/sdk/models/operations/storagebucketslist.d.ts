import { SpeakeasyBase } from "../../../internal/utils/utils";
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
    prefix?: string;
    prettyPrint?: boolean;
    project: string;
    projection?: StorageBucketsListProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
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
export declare class StorageBucketsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsListSecurity extends SpeakeasyBase {
    option1?: StorageBucketsListSecurityOption1;
    option2?: StorageBucketsListSecurityOption2;
    option3?: StorageBucketsListSecurityOption3;
    option4?: StorageBucketsListSecurityOption4;
    option5?: StorageBucketsListSecurityOption5;
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
