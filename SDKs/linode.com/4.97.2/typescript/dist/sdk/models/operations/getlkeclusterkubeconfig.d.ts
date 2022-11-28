import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLkeClusterKubeconfigPathParams extends SpeakeasyBase {
    clusterId: number;
}
export declare class GetLkeClusterKubeconfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLkeClusterKubeconfig200ApplicationJson extends SpeakeasyBase {
    kubeconfig?: string;
}
export declare class GetLkeClusterKubeconfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLkeClusterKubeconfigRequest extends SpeakeasyBase {
    pathParams: GetLkeClusterKubeconfigPathParams;
    security: GetLkeClusterKubeconfigSecurity;
}
export declare class GetLkeClusterKubeconfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLkeClusterKubeconfig200ApplicationJsonObject?: GetLkeClusterKubeconfig200ApplicationJson;
    getLkeClusterKubeconfigDefaultApplicationJsonObject?: GetLkeClusterKubeconfigDefaultApplicationJson;
}
