import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLkeClusterNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class GetLkeClusterNodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}

export enum GetLkeClusterNode200ApplicationJsonDataStatusEnum {
    Ready = "ready",
    NotReady = "not_ready"
}


// GetLkeClusterNode200ApplicationJsonData
/** 
 * The selected node in the cluster.
 * 
**/
export class GetLkeClusterNode200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instance_id" })
  instanceId?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetLkeClusterNode200ApplicationJsonDataStatusEnum;
}


export class GetLkeClusterNode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetLkeClusterNode200ApplicationJsonData;
}


export class GetLkeClusterNodeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClusterNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLkeClusterNodePathParams;

  @SpeakeasyMetadata()
  security: GetLkeClusterNodeSecurity;
}


export class GetLkeClusterNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLkeClusterNode200ApplicationJsonObject?: GetLkeClusterNode200ApplicationJson;

  @SpeakeasyMetadata()
  getLkeClusterNodeDefaultApplicationJsonObject?: GetLkeClusterNodeDefaultApplicationJson;
}
