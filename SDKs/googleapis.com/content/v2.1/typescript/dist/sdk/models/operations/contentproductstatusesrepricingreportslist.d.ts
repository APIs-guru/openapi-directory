import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductstatusesRepricingreportsListPathParams extends SpeakeasyBase {
    merchantId: string;
    productId: string;
}
export declare class ContentProductstatusesRepricingreportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endDate?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    ruleId?: string;
    startDate?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentProductstatusesRepricingreportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductstatusesRepricingreportsListRequest extends SpeakeasyBase {
    pathParams: ContentProductstatusesRepricingreportsListPathParams;
    queryParams: ContentProductstatusesRepricingreportsListQueryParams;
    security: ContentProductstatusesRepricingreportsListSecurity;
}
export declare class ContentProductstatusesRepricingreportsListResponse extends SpeakeasyBase {
    contentType: string;
    listRepricingProductReportsResponse?: shared.ListRepricingProductReportsResponse;
    statusCode: number;
}
