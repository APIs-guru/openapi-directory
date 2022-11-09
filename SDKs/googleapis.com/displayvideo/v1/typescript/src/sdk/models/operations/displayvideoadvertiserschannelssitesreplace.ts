import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisplayvideoAdvertisersChannelsSitesReplacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" })
  advertiserId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class DisplayvideoAdvertisersChannelsSitesReplaceQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DisplayvideoAdvertisersChannelsSitesReplaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DisplayvideoAdvertisersChannelsSitesReplaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisplayvideoAdvertisersChannelsSitesReplacePathParams;

  @Metadata()
  queryParams: DisplayvideoAdvertisersChannelsSitesReplaceQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ReplaceSitesRequest;

  @Metadata()
  security: DisplayvideoAdvertisersChannelsSitesReplaceSecurity;
}


export class DisplayvideoAdvertisersChannelsSitesReplaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  replaceSitesResponse?: shared.ReplaceSitesResponse;

  @Metadata()
  statusCode: number;
}
