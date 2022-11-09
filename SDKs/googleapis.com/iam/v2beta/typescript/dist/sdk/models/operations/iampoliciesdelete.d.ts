import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IamPoliciesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamPoliciesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IamPoliciesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamPoliciesDeleteRequest extends SpeakeasyBase {
    pathParams: IamPoliciesDeletePathParams;
    queryParams: IamPoliciesDeleteQueryParams;
    security: IamPoliciesDeleteSecurity;
}
export declare class IamPoliciesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
