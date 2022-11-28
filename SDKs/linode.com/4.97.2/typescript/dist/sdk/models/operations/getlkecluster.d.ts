import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLkeClusterPathParams extends SpeakeasyBase {
    clusterId: number;
}
export declare class GetLkeClusterSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLkeClusterDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLkeClusterRequest extends SpeakeasyBase {
    pathParams: GetLkeClusterPathParams;
    security: GetLkeClusterSecurity;
}
export declare class GetLkeClusterResponse extends SpeakeasyBase {
    contentType: string;
    lkeCluster?: shared.LkeCluster;
    statusCode: number;
    getLkeClusterDefaultApplicationJsonObject?: GetLkeClusterDefaultApplicationJson;
}
