import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=session" })
  session: string;
}


export class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams extends SpeakeasyBase {
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


export class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2;
}


export class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams;

  @Metadata()
  queryParams: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ExecuteSqlRequest;

  @Metadata()
  security: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity;
}


export class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  partialResultSet?: shared.PartialResultSet;

  @Metadata()
  statusCode: number;
}
