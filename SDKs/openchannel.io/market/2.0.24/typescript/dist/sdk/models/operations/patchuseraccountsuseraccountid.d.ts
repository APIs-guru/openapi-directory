import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchUserAccountsUserAccountIdPathParams extends SpeakeasyBase {
    userAccountId: string;
}
export declare class PatchUserAccountsUserAccountIdQueryParams extends SpeakeasyBase {
    customData?: string;
    email?: string;
    name?: string;
    userId: string;
}
export declare class PatchUserAccountsUserAccountIdRequest extends SpeakeasyBase {
    pathParams: PatchUserAccountsUserAccountIdPathParams;
    queryParams: PatchUserAccountsUserAccountIdQueryParams;
}
export declare class PatchUserAccountsUserAccountIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
