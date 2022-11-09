import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicecontrolServicesCheckPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceName" })
  serviceName: string;
}


export class ServicecontrolServicesCheckQueryParams extends SpeakeasyBase {
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


export class ServicecontrolServicesCheckSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServicecontrolServicesCheckSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServicecontrolServicesCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ServicecontrolServicesCheckSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ServicecontrolServicesCheckSecurityOption2;
}


export class ServicecontrolServicesCheckRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicecontrolServicesCheckPathParams;

  @Metadata()
  queryParams: ServicecontrolServicesCheckQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CheckRequest;

  @Metadata()
  security: ServicecontrolServicesCheckSecurity;
}


export class ServicecontrolServicesCheckResponse extends SpeakeasyBase {
  @Metadata()
  checkResponse?: shared.CheckResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
