import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostUserAccountsUserAccountIdPathParams extends SpeakeasyBase {
    userAccountId: string;
}
export declare class PostUserAccountsUserAccountIdQueryParams extends SpeakeasyBase {
    customData?: string;
    email?: string;
    name?: string;
    userId: string;
}
export declare class PostUserAccountsUserAccountIdRequest extends SpeakeasyBase {
    pathParams: PostUserAccountsUserAccountIdPathParams;
    queryParams: PostUserAccountsUserAccountIdQueryParams;
}
export declare class PostUserAccountsUserAccountIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
