import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class YoutubeChannelBannersInsertQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=channelId" })
  channelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" })
  onBehalfOfContentOwner?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" })
  onBehalfOfContentOwnerChannel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class YoutubeChannelBannersInsertRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @Metadata({ data: "request, media_type=image/jpeg" })
  imageJpeg: Uint8Array;

  @Metadata({ data: "request, media_type=image/png" })
  imagePng: Uint8Array;
}


export class YoutubeChannelBannersInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeChannelBannersInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeChannelBannersInsertSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeChannelBannersInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: YoutubeChannelBannersInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: YoutubeChannelBannersInsertSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: YoutubeChannelBannersInsertSecurityOption3;
}


export class YoutubeChannelBannersInsertRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: YoutubeChannelBannersInsertQueryParams;

  @Metadata()
  request?: YoutubeChannelBannersInsertRequests;

  @Metadata()
  security: YoutubeChannelBannersInsertSecurity;
}


export class YoutubeChannelBannersInsertResponse extends SpeakeasyBase {
  @Metadata()
  channelBannerResource?: shared.ChannelBannerResource;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
