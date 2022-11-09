import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLkeClusterApiEndpointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class GetLkeClusterApiEndpointsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLkeClusterApiEndpointsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLkeClusterApiEndpointsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLkeClusterApiEndpointsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLkeClusterApiEndpointsSecurityOption2;
}


export class GetLkeClusterApiEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLkeClusterApiEndpointsPathParams;

  @Metadata()
  security: GetLkeClusterApiEndpointsSecurity;
}


// GetLkeClusterApiEndpoints200ApplicationJsonData
/** 
 * The Kubernetes API server endpoints for this cluster.
 * 
**/
export class GetLkeClusterApiEndpoints200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


export class GetLkeClusterApiEndpoints200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.GetLkeClusterApiEndpoints200ApplicationJsonData })
  data?: GetLkeClusterApiEndpoints200ApplicationJsonData[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetLkeClusterApiEndpointsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClusterApiEndpointsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLkeClusterApiEndpoints200ApplicationJsonObject?: GetLkeClusterApiEndpoints200ApplicationJson;

  @Metadata()
  getLkeClusterApiEndpointsDefaultApplicationJsonObject?: GetLkeClusterApiEndpointsDefaultApplicationJson;
}
