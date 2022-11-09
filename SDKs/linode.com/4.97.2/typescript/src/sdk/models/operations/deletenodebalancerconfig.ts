import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteNodeBalancerConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class DeleteNodeBalancerConfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteNodeBalancerConfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteNodeBalancerConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteNodeBalancerConfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteNodeBalancerConfigSecurityOption2;
}


export class DeleteNodeBalancerConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNodeBalancerConfigPathParams;

  @Metadata()
  security: DeleteNodeBalancerConfigSecurity;
}


export class DeleteNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteNodeBalancerConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteNodeBalancerConfig200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteNodeBalancerConfigDefaultApplicationJsonObject?: DeleteNodeBalancerConfigDefaultApplicationJson;
}
