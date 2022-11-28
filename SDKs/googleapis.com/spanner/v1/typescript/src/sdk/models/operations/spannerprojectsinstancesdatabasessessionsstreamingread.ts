import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SpannerProjectsInstancesDatabasesSessionsStreamingReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" })
  session: string;
}


export class SpannerProjectsInstancesDatabasesSessionsStreamingReadQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption2;
}


export class SpannerProjectsInstancesDatabasesSessionsStreamingReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SpannerProjectsInstancesDatabasesSessionsStreamingReadPathParams;

  @SpeakeasyMetadata()
  queryParams: SpannerProjectsInstancesDatabasesSessionsStreamingReadQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ReadRequest;

  @SpeakeasyMetadata()
  security: SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurity;
}


export class SpannerProjectsInstancesDatabasesSessionsStreamingReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialResultSet?: shared.PartialResultSet;

  @SpeakeasyMetadata()
  statusCode: number;
}
