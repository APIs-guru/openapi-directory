import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNodeBalancerNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: number;
}


export class UpdateNodeBalancerNodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateNodeBalancerNodeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateNodeBalancerNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNodeBalancerNodePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NodeBalancerNodeInput;

  @SpeakeasyMetadata()
  security: UpdateNodeBalancerNodeSecurity;
}


export class UpdateNodeBalancerNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeBalancerNode?: shared.NodeBalancerNode;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNodeBalancerNodeDefaultApplicationJsonObject?: UpdateNodeBalancerNodeDefaultApplicationJson;
}
