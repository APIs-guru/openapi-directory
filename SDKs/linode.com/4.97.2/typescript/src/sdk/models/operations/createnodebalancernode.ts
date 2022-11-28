import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateNodeBalancerNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}

export enum CreateNodeBalancerNodeRequestBodyModeEnum {
    Accept = "accept",
    Reject = "reject",
    Drain = "drain",
    Backup = "backup"
}


export class CreateNodeBalancerNodeRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: CreateNodeBalancerNodeRequestBodyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}


export class CreateNodeBalancerNodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateNodeBalancerNodeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateNodeBalancerNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNodeBalancerNodePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNodeBalancerNodeRequestBodyInput;

  @SpeakeasyMetadata()
  security: CreateNodeBalancerNodeSecurity;
}


export class CreateNodeBalancerNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeBalancerNode?: shared.NodeBalancerNode;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNodeBalancerNodeDefaultApplicationJsonObject?: CreateNodeBalancerNodeDefaultApplicationJson;
}
