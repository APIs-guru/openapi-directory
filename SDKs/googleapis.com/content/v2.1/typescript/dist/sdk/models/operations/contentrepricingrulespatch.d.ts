import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRepricingrulesPatchPathParams extends SpeakeasyBase {
    merchantId: string;
    ruleId: string;
}
export declare class ContentRepricingrulesPatchQueryParams extends SpeakeasyBase {
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
export declare class ContentRepricingrulesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRepricingrulesPatchRequest extends SpeakeasyBase {
    pathParams: ContentRepricingrulesPatchPathParams;
    queryParams: ContentRepricingrulesPatchQueryParams;
    request?: shared.RepricingRuleInput;
    security: ContentRepricingrulesPatchSecurity;
}
export declare class ContentRepricingrulesPatchResponse extends SpeakeasyBase {
    contentType: string;
    repricingRule?: shared.RepricingRule;
    statusCode: number;
}
