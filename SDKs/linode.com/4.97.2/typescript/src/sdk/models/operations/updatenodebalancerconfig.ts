import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNodeBalancerConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class UpdateNodeBalancerConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateNodeBalancerConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateNodeBalancerConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateNodeBalancerConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateNodeBalancerConfigSecurityOption2;
}


export class UpdateNodeBalancerConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNodeBalancerConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NodeBalancerConfig;

  @Metadata()
  security: UpdateNodeBalancerConfigSecurity;
}


export class UpdateNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateNodeBalancerConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancerConfig?: shared.NodeBalancerConfig;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNodeBalancerConfigDefaultApplicationJsonObject?: UpdateNodeBalancerConfigDefaultApplicationJson;
}
