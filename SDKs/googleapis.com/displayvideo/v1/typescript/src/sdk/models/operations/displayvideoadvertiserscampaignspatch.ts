import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisplayvideoAdvertisersCampaignsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" })
  advertiserId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
  campaignId: string;
}


export class DisplayvideoAdvertisersCampaignsPatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" })
  updateMask?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DisplayvideoAdvertisersCampaignsPatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DisplayvideoAdvertisersCampaignsPatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DisplayvideoAdvertisersCampaignsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DisplayvideoAdvertisersCampaignsPatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DisplayvideoAdvertisersCampaignsPatchSecurityOption2;
}


export class DisplayvideoAdvertisersCampaignsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisplayvideoAdvertisersCampaignsPatchPathParams;

  @Metadata()
  queryParams: DisplayvideoAdvertisersCampaignsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Campaign;

  @Metadata()
  security: DisplayvideoAdvertisersCampaignsPatchSecurity;
}


export class DisplayvideoAdvertisersCampaignsPatchResponse extends SpeakeasyBase {
  @Metadata()
  campaign?: shared.Campaign;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
