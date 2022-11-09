import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PagespeedonlinePagespeedapiRunpagespeedStrategyEnum {
    Desktop = "desktop"
,    Mobile = "mobile"
}


export class PagespeedonlinePagespeedapiRunpagespeedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_third_party_resources" })
  filterThirdPartyResources?: boolean;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=rule" })
  rule?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=screenshot" })
  screenshot?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=snapshots" })
  snapshots?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=strategy" })
  strategy?: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=utm_campaign" })
  utmCampaign?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=utm_source" })
  utmSource?: string;
}


export class PagespeedonlinePagespeedapiRunpagespeedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PagespeedonlinePagespeedapiRunpagespeedQueryParams;
}


export class PagespeedonlinePagespeedapiRunpagespeedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
