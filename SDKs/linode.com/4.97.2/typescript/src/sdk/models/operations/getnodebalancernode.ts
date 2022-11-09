import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNodeBalancerNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: number;
}


export class GetNodeBalancerNodeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetNodeBalancerNodeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetNodeBalancerNodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetNodeBalancerNodeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetNodeBalancerNodeSecurityOption2;
}


export class GetNodeBalancerNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodeBalancerNodePathParams;

  @Metadata()
  security: GetNodeBalancerNodeSecurity;
}


export class GetNodeBalancerNodeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodeBalancerNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancerNode?: shared.NodeBalancerNode;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodeBalancerNodeDefaultApplicationJsonObject?: GetNodeBalancerNodeDefaultApplicationJson;
}
