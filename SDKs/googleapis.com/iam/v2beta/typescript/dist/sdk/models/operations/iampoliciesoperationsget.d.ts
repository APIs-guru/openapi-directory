import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamPoliciesOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamPoliciesOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class IamPoliciesOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamPoliciesOperationsGetRequest extends SpeakeasyBase {
    pathParams: IamPoliciesOperationsGetPathParams;
    queryParams: IamPoliciesOperationsGetQueryParams;
    security: IamPoliciesOperationsGetSecurity;
}
export declare class IamPoliciesOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
