import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class YoutubeCaptionsUpdateQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOf" })
  onBehalfOf?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" })
  onBehalfOfContentOwner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" })
  part: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sync" })
  sync?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class YoutubeCaptionsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class YoutubeCaptionsUpdateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeCaptionsUpdateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeCaptionsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: YoutubeCaptionsUpdateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: YoutubeCaptionsUpdateSecurityOption2;
}


export class YoutubeCaptionsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: YoutubeCaptionsUpdateQueryParams;

  @SpeakeasyMetadata()
  request?: YoutubeCaptionsUpdateRequests;

  @SpeakeasyMetadata()
  security: YoutubeCaptionsUpdateSecurity;
}


export class YoutubeCaptionsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  caption?: shared.Caption;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
