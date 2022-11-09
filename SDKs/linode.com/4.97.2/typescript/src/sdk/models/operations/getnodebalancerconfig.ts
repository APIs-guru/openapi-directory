import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNodeBalancerConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class GetNodeBalancerConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetNodeBalancerConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetNodeBalancerConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetNodeBalancerConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetNodeBalancerConfigSecurityOption2;
}


export class GetNodeBalancerConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodeBalancerConfigPathParams;

  @Metadata()
  security: GetNodeBalancerConfigSecurity;
}


export class GetNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodeBalancerConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancerConfig?: shared.NodeBalancerConfig;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodeBalancerConfigDefaultApplicationJsonObject?: GetNodeBalancerConfigDefaultApplicationJson;
}
