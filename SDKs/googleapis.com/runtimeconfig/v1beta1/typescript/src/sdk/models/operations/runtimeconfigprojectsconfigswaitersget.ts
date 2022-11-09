import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RuntimeconfigProjectsConfigsWaitersGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class RuntimeconfigProjectsConfigsWaitersGetQueryParams extends SpeakeasyBase {
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


export class RuntimeconfigProjectsConfigsWaitersGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class RuntimeconfigProjectsConfigsWaitersGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class RuntimeconfigProjectsConfigsWaitersGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: RuntimeconfigProjectsConfigsWaitersGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: RuntimeconfigProjectsConfigsWaitersGetSecurityOption2;
}


export class RuntimeconfigProjectsConfigsWaitersGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RuntimeconfigProjectsConfigsWaitersGetPathParams;

  @Metadata()
  queryParams: RuntimeconfigProjectsConfigsWaitersGetQueryParams;

  @Metadata()
  security: RuntimeconfigProjectsConfigsWaitersGetSecurity;
}


export class RuntimeconfigProjectsConfigsWaitersGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  waiter?: shared.Waiter;
}
