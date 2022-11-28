import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccountsQueryParams extends SpeakeasyBase {
    account: string;
}
export declare class GetAccounts200ApplicationJson extends SpeakeasyBase {
    accounts?: string[];
}
export declare class GetAccountsRequest extends SpeakeasyBase {
    queryParams: GetAccountsQueryParams;
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    contentType: string;
    getAccounts200ApplicationJsonObject?: GetAccounts200ApplicationJson;
    statusCode: number;
}
