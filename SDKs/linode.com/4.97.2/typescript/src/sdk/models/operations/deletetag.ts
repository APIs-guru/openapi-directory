import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=label" })
  label: string;
}


export class DeleteTagSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteTagSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteTagSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteTagSecurityOption2;
}


export class DeleteTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTagPathParams;

  @Metadata()
  security: DeleteTagSecurity;
}


export class DeleteTagDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteTag200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteTagDefaultApplicationJsonObject?: DeleteTagDefaultApplicationJson;
}
