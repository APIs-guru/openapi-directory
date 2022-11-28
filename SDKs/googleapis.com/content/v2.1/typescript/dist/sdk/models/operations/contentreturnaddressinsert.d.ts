import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnaddressInsertPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentReturnaddressInsertQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnaddressInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnaddressInsertRequest extends SpeakeasyBase {
    pathParams: ContentReturnaddressInsertPathParams;
    queryParams: ContentReturnaddressInsertQueryParams;
    request?: shared.ReturnAddress;
    security: ContentReturnaddressInsertSecurity;
}
export declare class ContentReturnaddressInsertResponse extends SpeakeasyBase {
    contentType: string;
    returnAddress?: shared.ReturnAddress;
    statusCode: number;
}
