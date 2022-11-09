import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateNodeBalancerConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class CreateNodeBalancerConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateNodeBalancerConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateNodeBalancerConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateNodeBalancerConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateNodeBalancerConfigSecurityOption2;
}


export class CreateNodeBalancerConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNodeBalancerConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.NodeBalancerConfig;

  @Metadata()
  security: CreateNodeBalancerConfigSecurity;
}


export class CreateNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateNodeBalancerConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancerConfig?: shared.NodeBalancerConfig;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNodeBalancerConfigDefaultApplicationJsonObject?: CreateNodeBalancerConfigDefaultApplicationJson;
}
