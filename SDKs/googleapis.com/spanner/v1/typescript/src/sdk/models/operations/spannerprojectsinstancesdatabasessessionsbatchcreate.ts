import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SpannerProjectsInstancesDatabasesSessionsBatchCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" })
  database: string;
}


export class SpannerProjectsInstancesDatabasesSessionsBatchCreateQueryParams extends SpeakeasyBase {
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


export class SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption2;
}


export class SpannerProjectsInstancesDatabasesSessionsBatchCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SpannerProjectsInstancesDatabasesSessionsBatchCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: SpannerProjectsInstancesDatabasesSessionsBatchCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BatchCreateSessionsRequestInput;

  @SpeakeasyMetadata()
  security: SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurity;
}


export class SpannerProjectsInstancesDatabasesSessionsBatchCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchCreateSessionsResponse?: shared.BatchCreateSessionsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
