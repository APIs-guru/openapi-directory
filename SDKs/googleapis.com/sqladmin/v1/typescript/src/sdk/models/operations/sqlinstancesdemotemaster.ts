import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SqlInstancesDemoteMasterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class SqlInstancesDemoteMasterQueryParams extends SpeakeasyBase {
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


export class SqlInstancesDemoteMasterSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SqlInstancesDemoteMasterSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SqlInstancesDemoteMasterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SqlInstancesDemoteMasterSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SqlInstancesDemoteMasterSecurityOption2;
}


export class SqlInstancesDemoteMasterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SqlInstancesDemoteMasterPathParams;

  @Metadata()
  queryParams: SqlInstancesDemoteMasterQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.InstancesDemoteMasterRequest;

  @Metadata()
  security: SqlInstancesDemoteMasterSecurity;
}


export class SqlInstancesDemoteMasterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operation?: shared.Operation;

  @Metadata()
  statusCode: number;
}
