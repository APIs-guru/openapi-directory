import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostUsersUserIdPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PostUsersUserIdQueryParams extends SpeakeasyBase {
    customData?: string;
    email?: string;
    name?: string;
    type?: string;
    username?: string;
}
export declare class PostUsersUserIdRequest extends SpeakeasyBase {
    pathParams: PostUsersUserIdPathParams;
    queryParams: PostUsersUserIdQueryParams;
}
export declare class PostUsersUserIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
