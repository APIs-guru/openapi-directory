import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmGroupsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmGroupsRequest extends SpeakeasyBase {
    pathParams: PostRealmGroupsPathParams;
    request: shared.GroupRepresentation;
}
export declare class PostRealmGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
