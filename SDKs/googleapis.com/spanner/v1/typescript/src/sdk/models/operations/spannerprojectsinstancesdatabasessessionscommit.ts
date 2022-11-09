import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SpannerProjectsInstancesDatabasesSessionsCommitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=session" })
  session: string;
}


export class SpannerProjectsInstancesDatabasesSessionsCommitQueryParams extends SpeakeasyBase {
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


export class SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesSessionsCommitSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SpannerProjectsInstancesDatabasesSessionsCommitSecurityOption2;
}


export class SpannerProjectsInstancesDatabasesSessionsCommitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SpannerProjectsInstancesDatabasesSessionsCommitPathParams;

  @Metadata()
  queryParams: SpannerProjectsInstancesDatabasesSessionsCommitQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CommitRequest;

  @Metadata()
  security: SpannerProjectsInstancesDatabasesSessionsCommitSecurity;
}


export class SpannerProjectsInstancesDatabasesSessionsCommitResponse extends SpeakeasyBase {
  @Metadata()
  commitResponse?: shared.CommitResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
