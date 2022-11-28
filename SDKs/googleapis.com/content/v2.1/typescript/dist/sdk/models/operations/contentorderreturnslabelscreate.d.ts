import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderreturnsLabelsCreatePathParams extends SpeakeasyBase {
    merchantId: string;
    returnId: string;
}
export declare class ContentOrderreturnsLabelsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContentOrderreturnsLabelsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderreturnsLabelsCreateRequest extends SpeakeasyBase {
    pathParams: ContentOrderreturnsLabelsCreatePathParams;
    queryParams: ContentOrderreturnsLabelsCreateQueryParams;
    request?: shared.ReturnShippingLabel;
    security: ContentOrderreturnsLabelsCreateSecurity;
}
export declare class ContentOrderreturnsLabelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    returnShippingLabel?: shared.ReturnShippingLabel;
    statusCode: number;
}
