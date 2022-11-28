import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNodeBalancerConfigNodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class GetNodeBalancerConfigNodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetNodeBalancerConfigNodesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetNodeBalancerConfigNodes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.NodeBalancerNode })
  data?: shared.NodeBalancerNode[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetNodeBalancerConfigNodesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodeBalancerConfigNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNodeBalancerConfigNodesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNodeBalancerConfigNodesQueryParams;

  @SpeakeasyMetadata()
  security: GetNodeBalancerConfigNodesSecurity;
}


export class GetNodeBalancerConfigNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNodeBalancerConfigNodes200ApplicationJsonObject?: GetNodeBalancerConfigNodes200ApplicationJson;

  @SpeakeasyMetadata()
  getNodeBalancerConfigNodesDefaultApplicationJsonObject?: GetNodeBalancerConfigNodesDefaultApplicationJson;
}
