import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLkeClusterPoolsPathParams extends SpeakeasyBase {
    clusterId: number;
}
export declare class PostLkeClusterPoolsRequestBody extends SpeakeasyBase {
    count: number;
    disks?: shared.Items[];
    tags?: string[];
    type: string;
}
export declare class PostLkeClusterPoolsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class PostLkeClusterPoolsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class PostLkeClusterPoolsRequest extends SpeakeasyBase {
    pathParams: PostLkeClusterPoolsPathParams;
    request: PostLkeClusterPoolsRequestBody;
    security: PostLkeClusterPoolsSecurity;
}
export declare class PostLkeClusterPoolsResponse extends SpeakeasyBase {
    contentType: string;
    lkeNodePool?: shared.LkeNodePool;
    statusCode: number;
    postLkeClusterPoolsDefaultApplicationJsonObject?: PostLkeClusterPoolsDefaultApplicationJson;
}
