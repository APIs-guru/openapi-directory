import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductstatusesCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentProductstatusesCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductstatusesCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentProductstatusesCustombatchQueryParams;
    request?: shared.ProductstatusesCustomBatchRequest;
    security: ContentProductstatusesCustombatchSecurity;
}
export declare class ContentProductstatusesCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    productstatusesCustomBatchResponse?: shared.ProductstatusesCustomBatchResponse;
    statusCode: number;
}
