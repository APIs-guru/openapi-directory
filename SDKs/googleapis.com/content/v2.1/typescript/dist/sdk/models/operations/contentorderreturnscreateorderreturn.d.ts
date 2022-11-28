import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderreturnsCreateorderreturnPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentOrderreturnsCreateorderreturnQueryParams extends SpeakeasyBase {
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
export declare class ContentOrderreturnsCreateorderreturnSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderreturnsCreateorderreturnRequest extends SpeakeasyBase {
    pathParams: ContentOrderreturnsCreateorderreturnPathParams;
    queryParams: ContentOrderreturnsCreateorderreturnQueryParams;
    request?: shared.OrderreturnsCreateOrderReturnRequest;
    security: ContentOrderreturnsCreateorderreturnSecurity;
}
export declare class ContentOrderreturnsCreateorderreturnResponse extends SpeakeasyBase {
    contentType: string;
    orderreturnsCreateOrderReturnResponse?: shared.OrderreturnsCreateOrderReturnResponse;
    statusCode: number;
}
