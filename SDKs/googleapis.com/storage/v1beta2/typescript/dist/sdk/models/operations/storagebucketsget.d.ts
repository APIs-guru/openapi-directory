import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketsGetPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare enum StorageBucketsGetProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageBucketsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: StorageBucketsGetProjectionEnum;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageBucketsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsGetSecurity extends SpeakeasyBase {
    option1?: StorageBucketsGetSecurityOption1;
    option2?: StorageBucketsGetSecurityOption2;
    option3?: StorageBucketsGetSecurityOption3;
}
export declare class StorageBucketsGetRequest extends SpeakeasyBase {
    pathParams: StorageBucketsGetPathParams;
    queryParams: StorageBucketsGetQueryParams;
    security: StorageBucketsGetSecurity;
}
export declare class StorageBucketsGetResponse extends SpeakeasyBase {
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
}
