import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnpolicyInsertPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentReturnpolicyInsertQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnpolicyInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnpolicyInsertRequest extends SpeakeasyBase {
    pathParams: ContentReturnpolicyInsertPathParams;
    queryParams: ContentReturnpolicyInsertQueryParams;
    request?: shared.ReturnPolicy;
    security: ContentReturnpolicyInsertSecurity;
}
export declare class ContentReturnpolicyInsertResponse extends SpeakeasyBase {
    contentType: string;
    returnPolicy?: shared.ReturnPolicy;
    statusCode: number;
}
