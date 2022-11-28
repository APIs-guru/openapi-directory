import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentReturnaddressGetPathParams extends SpeakeasyBase {
    merchantId: string;
    returnAddressId: string;
}
export declare class ContentReturnaddressGetQueryParams extends SpeakeasyBase {
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
export declare class ContentReturnaddressGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentReturnaddressGetRequest extends SpeakeasyBase {
    pathParams: ContentReturnaddressGetPathParams;
    queryParams: ContentReturnaddressGetQueryParams;
    security: ContentReturnaddressGetSecurity;
}
export declare class ContentReturnaddressGetResponse extends SpeakeasyBase {
    contentType: string;
    returnAddress?: shared.ReturnAddress;
    statusCode: number;
}
