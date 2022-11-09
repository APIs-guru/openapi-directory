import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageObjectsGetIamPolicyPathParams extends SpeakeasyBase {
    bucket: string;
    object: string;
}
export declare class StorageObjectsGetIamPolicyQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    generation?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    userIp?: string;
    userProject?: string;
}
export declare class StorageObjectsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetIamPolicySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetIamPolicySecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: StorageObjectsGetIamPolicySecurityOption1;
    option2?: StorageObjectsGetIamPolicySecurityOption2;
    option3?: StorageObjectsGetIamPolicySecurityOption3;
    option4?: StorageObjectsGetIamPolicySecurityOption4;
    option5?: StorageObjectsGetIamPolicySecurityOption5;
}
export declare class StorageObjectsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: StorageObjectsGetIamPolicyPathParams;
    queryParams: StorageObjectsGetIamPolicyQueryParams;
    security: StorageObjectsGetIamPolicySecurity;
}
export declare class StorageObjectsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
