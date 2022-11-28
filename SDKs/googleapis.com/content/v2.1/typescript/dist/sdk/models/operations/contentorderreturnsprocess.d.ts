import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderreturnsProcessPathParams extends SpeakeasyBase {
    merchantId: string;
    returnId: string;
}
export declare class ContentOrderreturnsProcessQueryParams extends SpeakeasyBase {
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
export declare class ContentOrderreturnsProcessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderreturnsProcessRequest extends SpeakeasyBase {
    pathParams: ContentOrderreturnsProcessPathParams;
    queryParams: ContentOrderreturnsProcessQueryParams;
    request?: shared.OrderreturnsProcessRequest;
    security: ContentOrderreturnsProcessSecurity;
}
export declare class ContentOrderreturnsProcessResponse extends SpeakeasyBase {
    contentType: string;
    orderreturnsProcessResponse?: shared.OrderreturnsProcessResponse;
    statusCode: number;
}
