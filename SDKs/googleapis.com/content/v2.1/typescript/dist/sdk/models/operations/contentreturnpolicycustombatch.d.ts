import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnpolicyCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnpolicyCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnpolicyCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentReturnpolicyCustombatchQueryParams;
    request?: shared.ReturnpolicyCustomBatchRequest;
    security: ContentReturnpolicyCustombatchSecurity;
}
export declare class ContentReturnpolicyCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    returnpolicyCustomBatchResponse?: shared.ReturnpolicyCustomBatchResponse;
    statusCode: number;
}
