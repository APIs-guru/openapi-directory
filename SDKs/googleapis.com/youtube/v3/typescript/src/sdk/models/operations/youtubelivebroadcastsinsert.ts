import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class YoutubeLiveBroadcastsInsertQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" })
  onBehalfOfContentOwner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" })
  onBehalfOfContentOwnerChannel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" })
  part: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class YoutubeLiveBroadcastsInsertSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeLiveBroadcastsInsertSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeLiveBroadcastsInsertSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: YoutubeLiveBroadcastsInsertSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: YoutubeLiveBroadcastsInsertSecurityOption2;
}


export class YoutubeLiveBroadcastsInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: YoutubeLiveBroadcastsInsertQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.LiveBroadcast;

  @SpeakeasyMetadata()
  security: YoutubeLiveBroadcastsInsertSecurity;
}


export class YoutubeLiveBroadcastsInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  liveBroadcast?: shared.LiveBroadcast;

  @SpeakeasyMetadata()
  statusCode: number;
}
