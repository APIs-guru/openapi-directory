import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLkeClusterPoolRecyclePathParams extends SpeakeasyBase {
    clusterId: number;
    poolId: number;
}
export declare class PostLkeClusterPoolRecycleSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class PostLkeClusterPoolRecycleDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class PostLkeClusterPoolRecycleRequest extends SpeakeasyBase {
    pathParams: PostLkeClusterPoolRecyclePathParams;
    security: PostLkeClusterPoolRecycleSecurity;
}
export declare class PostLkeClusterPoolRecycleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postLkeClusterPoolRecycle200ApplicationJsonObject?: Map<string, any>;
    postLkeClusterPoolRecycleDefaultApplicationJsonObject?: PostLkeClusterPoolRecycleDefaultApplicationJson;
}
