import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmUsersPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmUsersRequest extends SpeakeasyBase {
    pathParams: PostRealmUsersPathParams;
    request: shared.UserRepresentation;
}
export declare class PostRealmUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
