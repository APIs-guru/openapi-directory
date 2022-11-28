import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNodeBalancerConfigsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class GetNodeBalancerConfigsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetNodeBalancerConfigsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetNodeBalancerConfigs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.NodeBalancerConfig })
  data?: shared.NodeBalancerConfig[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetNodeBalancerConfigsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodeBalancerConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNodeBalancerConfigsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNodeBalancerConfigsQueryParams;

  @SpeakeasyMetadata()
  security: GetNodeBalancerConfigsSecurity;
}


export class GetNodeBalancerConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNodeBalancerConfigs200ApplicationJsonObject?: GetNodeBalancerConfigs200ApplicationJson;

  @SpeakeasyMetadata()
  getNodeBalancerConfigsDefaultApplicationJsonObject?: GetNodeBalancerConfigsDefaultApplicationJson;
}
