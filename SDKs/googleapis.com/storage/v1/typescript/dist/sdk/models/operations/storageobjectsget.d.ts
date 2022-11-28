import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectsGetPathParams extends SpeakeasyBase {
    bucket: string;
    object: string;
}
export declare enum StorageObjectsGetProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    ifGenerationMatch?: string;
    ifGenerationNotMatch?: string;
    ifMetagenerationMatch?: string;
    ifMetagenerationNotMatch?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projection?: StorageObjectsGetProjectionEnum;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetSecurity extends SpeakeasyBase {
    option1?: StorageObjectsGetSecurityOption1;
    option2?: StorageObjectsGetSecurityOption2;
    option3?: StorageObjectsGetSecurityOption3;
    option4?: StorageObjectsGetSecurityOption4;
    option5?: StorageObjectsGetSecurityOption5;
}
export declare class StorageObjectsGetRequest extends SpeakeasyBase {
    pathParams: StorageObjectsGetPathParams;
    queryParams: StorageObjectsGetQueryParams;
    security: StorageObjectsGetSecurity;
}
export declare class StorageObjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    object?: shared.Object;
    statusCode: number;
}
