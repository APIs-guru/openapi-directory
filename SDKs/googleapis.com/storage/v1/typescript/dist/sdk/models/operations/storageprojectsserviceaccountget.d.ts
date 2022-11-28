import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageProjectsServiceAccountGetPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class StorageProjectsServiceAccountGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageProjectsServiceAccountGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsServiceAccountGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsServiceAccountGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsServiceAccountGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsServiceAccountGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageProjectsServiceAccountGetSecurity extends SpeakeasyBase {
    option1?: StorageProjectsServiceAccountGetSecurityOption1;
    option2?: StorageProjectsServiceAccountGetSecurityOption2;
    option3?: StorageProjectsServiceAccountGetSecurityOption3;
    option4?: StorageProjectsServiceAccountGetSecurityOption4;
    option5?: StorageProjectsServiceAccountGetSecurityOption5;
}
export declare class StorageProjectsServiceAccountGetRequest extends SpeakeasyBase {
    pathParams: StorageProjectsServiceAccountGetPathParams;
    queryParams: StorageProjectsServiceAccountGetQueryParams;
    security: StorageProjectsServiceAccountGetSecurity;
}
export declare class StorageProjectsServiceAccountGetResponse extends SpeakeasyBase {
    contentType: string;
    serviceAccount?: shared.ServiceAccount;
    statusCode: number;
}
