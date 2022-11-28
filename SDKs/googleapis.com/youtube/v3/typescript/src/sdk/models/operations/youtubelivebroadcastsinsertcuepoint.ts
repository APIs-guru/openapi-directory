import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class YoutubeLiveBroadcastsInsertCuepointQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" })
  onBehalfOfContentOwner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" })
  onBehalfOfContentOwnerChannel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" })
  part?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class YoutubeLiveBroadcastsInsertCuepointSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeLiveBroadcastsInsertCuepointSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeLiveBroadcastsInsertCuepointSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeLiveBroadcastsInsertCuepointSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: YoutubeLiveBroadcastsInsertCuepointSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: YoutubeLiveBroadcastsInsertCuepointSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: YoutubeLiveBroadcastsInsertCuepointSecurityOption3;
}


export class YoutubeLiveBroadcastsInsertCuepointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: YoutubeLiveBroadcastsInsertCuepointQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Cuepoint;

  @SpeakeasyMetadata()
  security: YoutubeLiveBroadcastsInsertCuepointSecurity;
}


export class YoutubeLiveBroadcastsInsertCuepointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  cuepoint?: shared.Cuepoint;

  @SpeakeasyMetadata()
  statusCode: number;
}
