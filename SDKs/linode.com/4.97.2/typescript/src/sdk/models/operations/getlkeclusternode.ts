import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLkeClusterNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class GetLkeClusterNodeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLkeClusterNodeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLkeClusterNodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLkeClusterNodeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLkeClusterNodeSecurityOption2;
}


export class GetLkeClusterNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLkeClusterNodePathParams;

  @Metadata()
  security: GetLkeClusterNodeSecurity;
}

export enum GetLkeClusterNode200ApplicationJsonDataStatusEnum {
    Ready = "ready"
,    NotReady = "not_ready"
}


// GetLkeClusterNode200ApplicationJsonData
/** 
 * The selected node in the cluster.
 * 
**/
export class GetLkeClusterNode200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instance_id" })
  instanceId?: number;

  @Metadata({ data: "json, name=status" })
  status?: GetLkeClusterNode200ApplicationJsonDataStatusEnum;
}


export class GetLkeClusterNode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: GetLkeClusterNode200ApplicationJsonData;
}


export class GetLkeClusterNodeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClusterNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLkeClusterNode200ApplicationJsonObject?: GetLkeClusterNode200ApplicationJson;

  @Metadata()
  getLkeClusterNodeDefaultApplicationJsonObject?: GetLkeClusterNodeDefaultApplicationJson;
}
