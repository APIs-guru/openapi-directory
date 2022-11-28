import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLkeClusterKubeconfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class GetLkeClusterKubeconfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetLkeClusterKubeconfig200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kubeconfig" })
  kubeconfig?: string;
}


export class GetLkeClusterKubeconfigDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClusterKubeconfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLkeClusterKubeconfigPathParams;

  @SpeakeasyMetadata()
  security: GetLkeClusterKubeconfigSecurity;
}


export class GetLkeClusterKubeconfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLkeClusterKubeconfig200ApplicationJsonObject?: GetLkeClusterKubeconfig200ApplicationJson;

  @SpeakeasyMetadata()
  getLkeClusterKubeconfigDefaultApplicationJsonObject?: GetLkeClusterKubeconfigDefaultApplicationJson;
}
