import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRepricingrulesListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentRepricingrulesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    countryCode?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentRepricingrulesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRepricingrulesListRequest extends SpeakeasyBase {
    pathParams: ContentRepricingrulesListPathParams;
    queryParams: ContentRepricingrulesListQueryParams;
    security: ContentRepricingrulesListSecurity;
}
export declare class ContentRepricingrulesListResponse extends SpeakeasyBase {
    contentType: string;
    listRepricingRulesResponse?: shared.ListRepricingRulesResponse;
    statusCode: number;
}
