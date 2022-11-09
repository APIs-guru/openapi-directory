import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamPoliciesUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamPoliciesUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IamPoliciesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamPoliciesUpdateRequest extends SpeakeasyBase {
    pathParams: IamPoliciesUpdatePathParams;
    queryParams: IamPoliciesUpdateQueryParams;
    request?: shared.GoogleIamV2betaPolicy;
    security: IamPoliciesUpdateSecurity;
}
export declare class IamPoliciesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
