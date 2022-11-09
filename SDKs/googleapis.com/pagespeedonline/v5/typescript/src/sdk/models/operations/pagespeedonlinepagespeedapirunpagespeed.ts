import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PagespeedonlinePagespeedapiRunpagespeedCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED"
,    Accessibility = "ACCESSIBILITY"
,    BestPractices = "BEST_PRACTICES"
,    Performance = "PERFORMANCE"
,    Pwa = "PWA"
,    Seo = "SEO"
}

export enum PagespeedonlinePagespeedapiRunpagespeedStrategyEnum {
    StrategyUnspecified = "STRATEGY_UNSPECIFIED"
,    Desktop = "DESKTOP"
,    Mobile = "MOBILE"
}


export class PagespeedonlinePagespeedapiRunpagespeedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=captchaToken" })
  captchaToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=strategy" })
  strategy?: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=utm_campaign" })
  utmCampaign?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=utm_source" })
  utmSource?: string;
}


export class PagespeedonlinePagespeedapiRunpagespeedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PagespeedonlinePagespeedapiRunpagespeedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PagespeedonlinePagespeedapiRunpagespeedQueryParams;

  @Metadata()
  security: PagespeedonlinePagespeedapiRunpagespeedSecurity;
}


export class PagespeedonlinePagespeedapiRunpagespeedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pagespeedApiPagespeedResponseV5?: shared.PagespeedApiPagespeedResponseV5;

  @Metadata()
  statusCode: number;
}
