import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteNodeBalancerConfigNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: number;
}


export class DeleteNodeBalancerConfigNodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteNodeBalancerConfigNodeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteNodeBalancerConfigNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNodeBalancerConfigNodePathParams;

  @SpeakeasyMetadata()
  security: DeleteNodeBalancerConfigNodeSecurity;
}


export class DeleteNodeBalancerConfigNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteNodeBalancerConfigNode200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteNodeBalancerConfigNodeDefaultApplicationJsonObject?: DeleteNodeBalancerConfigNodeDefaultApplicationJson;
}
