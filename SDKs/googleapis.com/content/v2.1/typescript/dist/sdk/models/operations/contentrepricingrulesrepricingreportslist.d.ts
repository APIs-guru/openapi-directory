import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRepricingrulesRepricingreportsListPathParams extends SpeakeasyBase {
    merchantId: string;
    ruleId: string;
}
export declare class ContentRepricingrulesRepricingreportsListQueryParams extends SpeakeasyBase {
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
    startDate?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentRepricingrulesRepricingreportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRepricingrulesRepricingreportsListRequest extends SpeakeasyBase {
    pathParams: ContentRepricingrulesRepricingreportsListPathParams;
    queryParams: ContentRepricingrulesRepricingreportsListQueryParams;
    security: ContentRepricingrulesRepricingreportsListSecurity;
}
export declare class ContentRepricingrulesRepricingreportsListResponse extends SpeakeasyBase {
    contentType: string;
    listRepricingRuleReportsResponse?: shared.ListRepricingRuleReportsResponse;
    statusCode: number;
}
