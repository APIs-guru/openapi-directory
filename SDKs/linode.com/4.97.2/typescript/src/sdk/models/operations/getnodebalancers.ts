import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNodeBalancersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetNodeBalancersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetNodeBalancersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetNodeBalancersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetNodeBalancersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetNodeBalancersSecurityOption2;
}


export class GetNodeBalancersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNodeBalancersQueryParams;

  @Metadata()
  security: GetNodeBalancersSecurity;
}


export class GetNodeBalancers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.NodeBalancer })
  data?: shared.NodeBalancer[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetNodeBalancersDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodeBalancersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodeBalancers200ApplicationJsonObject?: GetNodeBalancers200ApplicationJson;

  @Metadata()
  getNodeBalancersDefaultApplicationJsonObject?: GetNodeBalancersDefaultApplicationJson;
}
