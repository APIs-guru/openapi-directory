import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageBucketsDeletePathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class StorageBucketsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageBucketsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageBucketsDeleteSecurity extends SpeakeasyBase {
    option1?: StorageBucketsDeleteSecurityOption1;
    option2?: StorageBucketsDeleteSecurityOption2;
    option3?: StorageBucketsDeleteSecurityOption3;
}
export declare class StorageBucketsDeleteRequest extends SpeakeasyBase {
    pathParams: StorageBucketsDeletePathParams;
    queryParams: StorageBucketsDeleteQueryParams;
    security: StorageBucketsDeleteSecurity;
}
export declare class StorageBucketsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
