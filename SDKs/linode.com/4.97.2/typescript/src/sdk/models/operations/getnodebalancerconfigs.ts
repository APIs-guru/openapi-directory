import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNodeBalancerConfigsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class GetNodeBalancerConfigsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetNodeBalancerConfigsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetNodeBalancerConfigsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetNodeBalancerConfigsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetNodeBalancerConfigsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetNodeBalancerConfigsSecurityOption2;
}


export class GetNodeBalancerConfigsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodeBalancerConfigsPathParams;

  @Metadata()
  queryParams: GetNodeBalancerConfigsQueryParams;

  @Metadata()
  security: GetNodeBalancerConfigsSecurity;
}


export class GetNodeBalancerConfigs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.NodeBalancerConfig })
  data?: shared.NodeBalancerConfig[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetNodeBalancerConfigsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodeBalancerConfigsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodeBalancerConfigs200ApplicationJsonObject?: GetNodeBalancerConfigs200ApplicationJson;

  @Metadata()
  getNodeBalancerConfigsDefaultApplicationJsonObject?: GetNodeBalancerConfigsDefaultApplicationJson;
}
