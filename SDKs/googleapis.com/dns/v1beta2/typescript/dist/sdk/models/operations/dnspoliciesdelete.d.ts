import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsPoliciesDeletePathParams extends SpeakeasyBase {
    policy: string;
    project: string;
}
export declare class DnsPoliciesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientOperationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsPoliciesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsPoliciesDeleteSecurity extends SpeakeasyBase {
    option1?: DnsPoliciesDeleteSecurityOption1;
    option2?: DnsPoliciesDeleteSecurityOption2;
}
export declare class DnsPoliciesDeleteRequest extends SpeakeasyBase {
    pathParams: DnsPoliciesDeletePathParams;
    queryParams: DnsPoliciesDeleteQueryParams;
    security: DnsPoliciesDeleteSecurity;
}
export declare class DnsPoliciesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
