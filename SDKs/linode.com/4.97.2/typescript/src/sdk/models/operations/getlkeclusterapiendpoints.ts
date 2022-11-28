import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLkeClusterApiEndpointsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class GetLkeClusterApiEndpointsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


// GetLkeClusterApiEndpoints200ApplicationJsonData
/** 
 * The Kubernetes API server endpoints for this cluster.
 * 
**/
export class GetLkeClusterApiEndpoints200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


export class GetLkeClusterApiEndpoints200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetLkeClusterApiEndpoints200ApplicationJsonData })
  data?: GetLkeClusterApiEndpoints200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetLkeClusterApiEndpointsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClusterApiEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLkeClusterApiEndpointsPathParams;

  @SpeakeasyMetadata()
  security: GetLkeClusterApiEndpointsSecurity;
}


export class GetLkeClusterApiEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLkeClusterApiEndpoints200ApplicationJsonObject?: GetLkeClusterApiEndpoints200ApplicationJson;

  @SpeakeasyMetadata()
  getLkeClusterApiEndpointsDefaultApplicationJsonObject?: GetLkeClusterApiEndpointsDefaultApplicationJson;
}
