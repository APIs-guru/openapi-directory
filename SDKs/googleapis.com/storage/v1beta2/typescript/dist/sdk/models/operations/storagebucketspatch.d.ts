import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketsPatchPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare enum StorageBucketsPatchProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageBucketsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: StorageBucketsPatchProjectionEnum;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageBucketsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsPatchSecurity extends SpeakeasyBase {
    option1?: StorageBucketsPatchSecurityOption1;
    option2?: StorageBucketsPatchSecurityOption2;
}
export declare class StorageBucketsPatchRequest extends SpeakeasyBase {
    pathParams: StorageBucketsPatchPathParams;
    queryParams: StorageBucketsPatchQueryParams;
    request?: shared.Bucket;
    security: StorageBucketsPatchSecurity;
}
export declare class StorageBucketsPatchResponse extends SpeakeasyBase {
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
}
