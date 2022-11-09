import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StorageBucketsInsertProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageBucketsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    project: string;
    projection?: StorageBucketsInsertProjectionEnum;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageBucketsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsInsertSecurity extends SpeakeasyBase {
    option1?: StorageBucketsInsertSecurityOption1;
    option2?: StorageBucketsInsertSecurityOption2;
}
export declare class StorageBucketsInsertRequest extends SpeakeasyBase {
    queryParams: StorageBucketsInsertQueryParams;
    request?: shared.Bucket;
    security: StorageBucketsInsertSecurity;
}
export declare class StorageBucketsInsertResponse extends SpeakeasyBase {
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
}
