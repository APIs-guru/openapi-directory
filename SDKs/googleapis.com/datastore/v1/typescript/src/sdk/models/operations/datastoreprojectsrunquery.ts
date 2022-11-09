import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DatastoreProjectsRunQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DatastoreProjectsRunQueryQueryParams extends SpeakeasyBase {
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


export class DatastoreProjectsRunQuerySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DatastoreProjectsRunQuerySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DatastoreProjectsRunQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DatastoreProjectsRunQuerySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DatastoreProjectsRunQuerySecurityOption2;
}


export class DatastoreProjectsRunQueryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DatastoreProjectsRunQueryPathParams;

  @Metadata()
  queryParams: DatastoreProjectsRunQueryQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.RunQueryRequest;

  @Metadata()
  security: DatastoreProjectsRunQuerySecurity;
}


export class DatastoreProjectsRunQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  runQueryResponse?: shared.RunQueryResponse;

  @Metadata()
  statusCode: number;
}
