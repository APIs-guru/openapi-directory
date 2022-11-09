import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StorageObjectsSetIamPolicyPathParams extends SpeakeasyBase {
    bucket: string;
    object: string;
}
export declare class StorageObjectsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class StorageObjectsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsSetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: StorageObjectsSetIamPolicySecurityOption1;
    option2?: StorageObjectsSetIamPolicySecurityOption2;
    option3?: StorageObjectsSetIamPolicySecurityOption3;
}
export declare class StorageObjectsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: StorageObjectsSetIamPolicyPathParams;
    queryParams: StorageObjectsSetIamPolicyQueryParams;
    request?: shared.Policy;
    security: StorageObjectsSetIamPolicySecurity;
}
export declare class StorageObjectsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
