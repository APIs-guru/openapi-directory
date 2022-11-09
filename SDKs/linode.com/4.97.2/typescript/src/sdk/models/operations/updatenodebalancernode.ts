import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNodeBalancerNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: number;
}


export class UpdateNodeBalancerNodeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateNodeBalancerNodeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateNodeBalancerNodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateNodeBalancerNodeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateNodeBalancerNodeSecurityOption2;
}


export class UpdateNodeBalancerNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNodeBalancerNodePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NodeBalancerNode;

  @Metadata()
  security: UpdateNodeBalancerNodeSecurity;
}


export class UpdateNodeBalancerNodeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateNodeBalancerNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancerNode?: shared.NodeBalancerNode;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNodeBalancerNodeDefaultApplicationJsonObject?: UpdateNodeBalancerNodeDefaultApplicationJson;
}
