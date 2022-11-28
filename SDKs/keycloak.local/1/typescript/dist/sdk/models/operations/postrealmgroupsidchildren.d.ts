import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmGroupsIdChildrenPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmGroupsIdChildrenRequest extends SpeakeasyBase {
    pathParams: PostRealmGroupsIdChildrenPathParams;
    request: shared.GroupRepresentation;
}
export declare class PostRealmGroupsIdChildrenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
