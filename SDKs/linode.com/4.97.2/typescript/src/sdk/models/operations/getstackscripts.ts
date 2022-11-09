import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStackScriptsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetStackScriptsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetStackScriptsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetStackScriptsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetStackScriptsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetStackScriptsSecurityOption2;
}


export class GetStackScriptsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStackScriptsQueryParams;

  @Metadata()
  security: GetStackScriptsSecurity;
}


export class GetStackScripts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.StackScript })
  data?: shared.StackScript[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetStackScriptsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetStackScriptsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStackScripts200ApplicationJsonObject?: GetStackScripts200ApplicationJson;

  @Metadata()
  getStackScriptsDefaultApplicationJsonObject?: GetStackScriptsDefaultApplicationJson;
}
