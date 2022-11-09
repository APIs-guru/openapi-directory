import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateNodeBalancerNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}

export enum CreateNodeBalancerNodeRequestBodyModeEnum {
    Accept = "accept"
,    Reject = "reject"
,    Drain = "drain"
,    Backup = "backup"
}

export enum CreateNodeBalancerNodeRequestBodyStatusEnum {
    Unknown = "unknown"
,    Up = "UP"
,    Down = "DOWN"
}


export class CreateNodeBalancerNodeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: string;

  @Metadata({ data: "json, name=config_id" })
  configId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=mode" })
  mode?: CreateNodeBalancerNodeRequestBodyModeEnum;

  @Metadata({ data: "json, name=nodebalancer_id" })
  nodebalancerId?: number;

  @Metadata({ data: "json, name=status" })
  status?: CreateNodeBalancerNodeRequestBodyStatusEnum;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}


export class CreateNodeBalancerNodeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateNodeBalancerNodeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateNodeBalancerNodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateNodeBalancerNodeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateNodeBalancerNodeSecurityOption2;
}


export class CreateNodeBalancerNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNodeBalancerNodePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNodeBalancerNodeRequestBody;

  @Metadata()
  security: CreateNodeBalancerNodeSecurity;
}


export class CreateNodeBalancerNodeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateNodeBalancerNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancerNode?: shared.NodeBalancerNode;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNodeBalancerNodeDefaultApplicationJsonObject?: CreateNodeBalancerNodeDefaultApplicationJson;
}
