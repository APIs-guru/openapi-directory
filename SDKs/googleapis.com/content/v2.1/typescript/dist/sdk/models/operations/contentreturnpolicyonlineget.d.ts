import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnpolicyonlineGetPathParams extends SpeakeasyBase {
    merchantId: string;
    returnPolicyId: string;
}
export declare class ContentReturnpolicyonlineGetQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnpolicyonlineGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnpolicyonlineGetRequest extends SpeakeasyBase {
    pathParams: ContentReturnpolicyonlineGetPathParams;
    queryParams: ContentReturnpolicyonlineGetQueryParams;
    security: ContentReturnpolicyonlineGetSecurity;
}
export declare class ContentReturnpolicyonlineGetResponse extends SpeakeasyBase {
    contentType: string;
    returnPolicyOnline?: shared.ReturnPolicyOnline;
    statusCode: number;
}
