import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderreturnsAcknowledgePathParams extends SpeakeasyBase {
    merchantId: string;
    returnId: string;
}
export declare class ContentOrderreturnsAcknowledgeQueryParams extends SpeakeasyBase {
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
export declare class ContentOrderreturnsAcknowledgeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderreturnsAcknowledgeRequest extends SpeakeasyBase {
    pathParams: ContentOrderreturnsAcknowledgePathParams;
    queryParams: ContentOrderreturnsAcknowledgeQueryParams;
    request?: shared.OrderreturnsAcknowledgeRequest;
    security: ContentOrderreturnsAcknowledgeSecurity;
}
export declare class ContentOrderreturnsAcknowledgeResponse extends SpeakeasyBase {
    contentType: string;
    orderreturnsAcknowledgeResponse?: shared.OrderreturnsAcknowledgeResponse;
    statusCode: number;
}
