import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectsInsertPathParams extends SpeakeasyBase {
    bucket: string;
}
export declare enum StorageObjectsInsertProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ifGenerationMatch?: string;
    ifGenerationNotMatch?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: StorageObjectsInsertProjectionEnum;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageObjectsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsInsertSecurity extends SpeakeasyBase {
    option1?: StorageObjectsInsertSecurityOption1;
    option2?: StorageObjectsInsertSecurityOption2;
}
export declare class StorageObjectsInsertRequest extends SpeakeasyBase {
    pathParams: StorageObjectsInsertPathParams;
    queryParams: StorageObjectsInsertQueryParams;
    request?: Uint8Array;
    security: StorageObjectsInsertSecurity;
}
export declare class StorageObjectsInsertResponse extends SpeakeasyBase {
    contentType: string;
    object?: shared.Object;
    statusCode: number;
}
