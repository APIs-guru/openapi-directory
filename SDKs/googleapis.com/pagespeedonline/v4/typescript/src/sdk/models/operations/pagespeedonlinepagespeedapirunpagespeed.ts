import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PagespeedonlinePagespeedapiRunpagespeedStrategyEnum {
    Desktop = "desktop",
    Mobile = "mobile"
}


export class PagespeedonlinePagespeedapiRunpagespeedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_third_party_resources" })
  filterThirdPartyResources?: boolean;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rule" })
  rule?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=screenshot" })
  screenshot?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=snapshots" })
  snapshots?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=strategy" })
  strategy?: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=utm_campaign" })
  utmCampaign?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=utm_source" })
  utmSource?: string;
}


export class PagespeedonlinePagespeedapiRunpagespeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PagespeedonlinePagespeedapiRunpagespeedQueryParams;
}


export class PagespeedonlinePagespeedapiRunpagespeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
