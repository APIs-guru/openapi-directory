import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateNodeBalancerSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateNodeBalancerSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateNodeBalancerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateNodeBalancerSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateNodeBalancerSecurityOption2;
}


export class CreateNodeBalancerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: CreateNodeBalancerSecurity;
}


export class CreateNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateNodeBalancerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancer?: shared.NodeBalancer;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNodeBalancerDefaultApplicationJsonObject?: CreateNodeBalancerDefaultApplicationJson;
}
