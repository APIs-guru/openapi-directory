import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PagespeedonlinePagespeedapiRunpagespeedCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Accessibility = "ACCESSIBILITY",
    BestPractices = "BEST_PRACTICES",
    Performance = "PERFORMANCE",
    Pwa = "PWA",
    Seo = "SEO"
}

export enum PagespeedonlinePagespeedapiRunpagespeedStrategyEnum {
    StrategyUnspecified = "STRATEGY_UNSPECIFIED",
    Desktop = "DESKTOP",
    Mobile = "MOBILE"
}


export class PagespeedonlinePagespeedapiRunpagespeedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=captchaToken" })
  captchaToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=strategy" })
  strategy?: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=utm_campaign" })
  utmCampaign?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=utm_source" })
  utmSource?: string;
}


export class PagespeedonlinePagespeedapiRunpagespeedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PagespeedonlinePagespeedapiRunpagespeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PagespeedonlinePagespeedapiRunpagespeedQueryParams;

  @SpeakeasyMetadata()
  security: PagespeedonlinePagespeedapiRunpagespeedSecurity;
}


export class PagespeedonlinePagespeedapiRunpagespeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pagespeedApiPagespeedResponseV5?: shared.PagespeedApiPagespeedResponseV5;

  @SpeakeasyMetadata()
  statusCode: number;
}
