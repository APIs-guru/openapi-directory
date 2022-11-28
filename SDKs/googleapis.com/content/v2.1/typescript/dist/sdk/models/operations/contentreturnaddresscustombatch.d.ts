import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnaddressCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnaddressCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnaddressCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentReturnaddressCustombatchQueryParams;
    request?: shared.ReturnaddressCustomBatchRequest;
    security: ContentReturnaddressCustombatchSecurity;
}
export declare class ContentReturnaddressCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    returnaddressCustomBatchResponse?: shared.ReturnaddressCustomBatchResponse;
    statusCode: number;
}
