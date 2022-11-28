import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLkeClusterRecyclePathParams extends SpeakeasyBase {
    clusterId: number;
}
export declare class PostLkeClusterRecycleSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class PostLkeClusterRecycleDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class PostLkeClusterRecycleRequest extends SpeakeasyBase {
    pathParams: PostLkeClusterRecyclePathParams;
    security: PostLkeClusterRecycleSecurity;
}
export declare class PostLkeClusterRecycleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postLkeClusterRecycle200ApplicationJsonObject?: Map<string, any>;
    postLkeClusterRecycleDefaultApplicationJsonObject?: PostLkeClusterRecycleDefaultApplicationJson;
}
