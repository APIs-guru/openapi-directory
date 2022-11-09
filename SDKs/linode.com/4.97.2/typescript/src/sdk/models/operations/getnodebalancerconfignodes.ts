import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNodeBalancerConfigNodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class GetNodeBalancerConfigNodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetNodeBalancerConfigNodesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetNodeBalancerConfigNodesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetNodeBalancerConfigNodesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetNodeBalancerConfigNodesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetNodeBalancerConfigNodesSecurityOption2;
}


export class GetNodeBalancerConfigNodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodeBalancerConfigNodesPathParams;

  @Metadata()
  queryParams: GetNodeBalancerConfigNodesQueryParams;

  @Metadata()
  security: GetNodeBalancerConfigNodesSecurity;
}


export class GetNodeBalancerConfigNodes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.NodeBalancerNode })
  data?: shared.NodeBalancerNode[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetNodeBalancerConfigNodesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodeBalancerConfigNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodeBalancerConfigNodes200ApplicationJsonObject?: GetNodeBalancerConfigNodes200ApplicationJson;

  @Metadata()
  getNodeBalancerConfigNodesDefaultApplicationJsonObject?: GetNodeBalancerConfigNodesDefaultApplicationJson;
}
