import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLkeClusterKubeconfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class GetLkeClusterKubeconfigSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLkeClusterKubeconfigSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLkeClusterKubeconfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLkeClusterKubeconfigSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLkeClusterKubeconfigSecurityOption2;
}


export class GetLkeClusterKubeconfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLkeClusterKubeconfigPathParams;

  @Metadata()
  security: GetLkeClusterKubeconfigSecurity;
}


export class GetLkeClusterKubeconfig200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=kubeconfig" })
  kubeconfig?: string;
}


export class GetLkeClusterKubeconfigDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClusterKubeconfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLkeClusterKubeconfig200ApplicationJsonObject?: GetLkeClusterKubeconfig200ApplicationJson;

  @Metadata()
  getLkeClusterKubeconfigDefaultApplicationJsonObject?: GetLkeClusterKubeconfigDefaultApplicationJson;
}
