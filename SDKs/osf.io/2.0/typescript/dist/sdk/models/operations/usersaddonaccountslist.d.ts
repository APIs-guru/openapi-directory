import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersAddonAccountsListPathParams extends SpeakeasyBase {
    provider: string;
    userId: string;
}
export declare class UsersAddonAccountsListRequest extends SpeakeasyBase {
    pathParams: UsersAddonAccountsListPathParams;
}
export declare class UsersAddonAccountsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
