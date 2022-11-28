import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLkeClusterNodeRecyclePathParams extends SpeakeasyBase {
    clusterId: number;
    nodeId: string;
}
export declare class PostLkeClusterNodeRecycleSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class PostLkeClusterNodeRecycleDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class PostLkeClusterNodeRecycleRequest extends SpeakeasyBase {
    pathParams: PostLkeClusterNodeRecyclePathParams;
    security: PostLkeClusterNodeRecycleSecurity;
}
export declare class PostLkeClusterNodeRecycleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postLkeClusterNodeRecycle200ApplicationJsonObject?: Map<string, any>;
    postLkeClusterNodeRecycleDefaultApplicationJsonObject?: PostLkeClusterNodeRecycleDefaultApplicationJson;
}
