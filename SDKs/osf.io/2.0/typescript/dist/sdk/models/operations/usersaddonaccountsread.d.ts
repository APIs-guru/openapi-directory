import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersAddonAccountsReadPathParams extends SpeakeasyBase {
    accountId: string;
    provider: string;
    userId: string;
}
export declare class UsersAddonAccountsReadRequest extends SpeakeasyBase {
    pathParams: UsersAddonAccountsReadPathParams;
}
export declare class UsersAddonAccountsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
