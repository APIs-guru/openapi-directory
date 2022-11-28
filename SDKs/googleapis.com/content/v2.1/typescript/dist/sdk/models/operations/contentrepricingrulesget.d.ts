import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRepricingrulesGetPathParams extends SpeakeasyBase {
    merchantId: string;
    ruleId: string;
}
export declare class ContentRepricingrulesGetQueryParams extends SpeakeasyBase {
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
export declare class ContentRepricingrulesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRepricingrulesGetRequest extends SpeakeasyBase {
    pathParams: ContentRepricingrulesGetPathParams;
    queryParams: ContentRepricingrulesGetQueryParams;
    security: ContentRepricingrulesGetSecurity;
}
export declare class ContentRepricingrulesGetResponse extends SpeakeasyBase {
    contentType: string;
    repricingRule?: shared.RepricingRule;
    statusCode: number;
}
