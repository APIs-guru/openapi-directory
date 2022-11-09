import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains" })
  domains?: number[];

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=linodes" })
  linodes?: number[];

  @Metadata({ data: "json, name=nodebalancers" })
  nodebalancers?: number[];

  @Metadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class CreateTagSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateTagSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateTagSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateTagSecurityOption2;
}


export class CreateTagRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateTagRequestBody;

  @Metadata()
  security: CreateTagSecurity;
}


export class CreateTagDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;

  @Metadata()
  createTagDefaultApplicationJsonObject?: CreateTagDefaultApplicationJson;
}
