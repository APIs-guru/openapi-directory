import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnpolicyonlineListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentReturnpolicyonlineListQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnpolicyonlineListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnpolicyonlineListRequest extends SpeakeasyBase {
    pathParams: ContentReturnpolicyonlineListPathParams;
    queryParams: ContentReturnpolicyonlineListQueryParams;
    security: ContentReturnpolicyonlineListSecurity;
}
export declare class ContentReturnpolicyonlineListResponse extends SpeakeasyBase {
    contentType: string;
    listReturnPolicyOnlineResponse?: shared.ListReturnPolicyOnlineResponse;
    statusCode: number;
}
