import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScriptProjectsGetContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scriptId" })
  scriptId: string;
}


export class ScriptProjectsGetContentQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=versionNumber" })
  versionNumber?: number;
}


export class ScriptProjectsGetContentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ScriptProjectsGetContentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ScriptProjectsGetContentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ScriptProjectsGetContentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ScriptProjectsGetContentSecurityOption2;
}


export class ScriptProjectsGetContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScriptProjectsGetContentPathParams;

  @Metadata()
  queryParams: ScriptProjectsGetContentQueryParams;

  @Metadata()
  security: ScriptProjectsGetContentSecurity;
}


export class ScriptProjectsGetContentResponse extends SpeakeasyBase {
  @Metadata()
  content?: shared.Content;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
