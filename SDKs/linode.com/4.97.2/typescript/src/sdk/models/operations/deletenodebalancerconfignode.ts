import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteNodeBalancerConfigNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: number;
}


export class DeleteNodeBalancerConfigNodeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteNodeBalancerConfigNodeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteNodeBalancerConfigNodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteNodeBalancerConfigNodeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteNodeBalancerConfigNodeSecurityOption2;
}


export class DeleteNodeBalancerConfigNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNodeBalancerConfigNodePathParams;

  @Metadata()
  security: DeleteNodeBalancerConfigNodeSecurity;
}


export class DeleteNodeBalancerConfigNodeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteNodeBalancerConfigNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteNodeBalancerConfigNode200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteNodeBalancerConfigNodeDefaultApplicationJsonObject?: DeleteNodeBalancerConfigNodeDefaultApplicationJson;
}
