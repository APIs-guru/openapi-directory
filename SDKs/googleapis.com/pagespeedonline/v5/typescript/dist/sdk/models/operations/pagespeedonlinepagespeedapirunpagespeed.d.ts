import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PagespeedonlinePagespeedapiRunpagespeedCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Accessibility = "ACCESSIBILITY",
    BestPractices = "BEST_PRACTICES",
    Performance = "PERFORMANCE",
    Pwa = "PWA",
    Seo = "SEO"
}
export declare enum PagespeedonlinePagespeedapiRunpagespeedStrategyEnum {
    StrategyUnspecified = "STRATEGY_UNSPECIFIED",
    Desktop = "DESKTOP",
    Mobile = "MOBILE"
}
export declare class PagespeedonlinePagespeedapiRunpagespeedQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    captchaToken?: string;
    category?: PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[];
    fields?: string;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    strategy?: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
    uploadType?: string;
    uploadProtocol?: string;
    url: string;
    utmCampaign?: string;
    utmSource?: string;
}
export declare class PagespeedonlinePagespeedapiRunpagespeedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PagespeedonlinePagespeedapiRunpagespeedRequest extends SpeakeasyBase {
    queryParams: PagespeedonlinePagespeedapiRunpagespeedQueryParams;
    security: PagespeedonlinePagespeedapiRunpagespeedSecurity;
}
export declare class PagespeedonlinePagespeedapiRunpagespeedResponse extends SpeakeasyBase {
    contentType: string;
    pagespeedApiPagespeedResponseV5?: shared.PagespeedApiPagespeedResponseV5;
    statusCode: number;
}
