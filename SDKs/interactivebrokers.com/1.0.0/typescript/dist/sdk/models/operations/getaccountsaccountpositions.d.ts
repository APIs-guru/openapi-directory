import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccountsAccountPositionsPathParams extends SpeakeasyBase {
    account: string;
}
export declare class GetAccountsAccountPositions200ApplicationJson extends SpeakeasyBase {
    averageCost?: number;
    contractId?: number;
    position?: number;
}
export declare class GetAccountsAccountPositionsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountPositionsPathParams;
}
export declare class GetAccountsAccountPositionsResponse extends SpeakeasyBase {
    contentType: string;
    getAccountsAccountPositions200ApplicationJsonObjects?: GetAccountsAccountPositions200ApplicationJson[];
    statusCode: number;
}
