import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnaddressDeletePathParams extends SpeakeasyBase {
    merchantId: string;
    returnAddressId: string;
}
export declare class ContentReturnaddressDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnaddressDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnaddressDeleteRequest extends SpeakeasyBase {
    pathParams: ContentReturnaddressDeletePathParams;
    queryParams: ContentReturnaddressDeleteQueryParams;
    security: ContentReturnaddressDeleteSecurity;
}
export declare class ContentReturnaddressDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
