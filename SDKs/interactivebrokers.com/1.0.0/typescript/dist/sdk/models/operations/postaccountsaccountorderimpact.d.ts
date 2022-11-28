import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAccountsAccountOrderImpactPathParams extends SpeakeasyBase {
    account: string;
}
export declare class PostAccountsAccountOrderImpactRequestBody extends SpeakeasyBase {
    auxPrice?: number;
    contractId?: number;
    currency?: string;
    customerOrderId?: string;
    instrumentType?: string;
    listingExchange?: string;
    orderType?: number;
    price?: number;
    quantity?: number;
    side?: number;
    ticker?: string;
    timeInForce?: number;
}
export declare class PostAccountsAccountOrderImpact200ApplicationJson extends SpeakeasyBase {
    commission?: number;
    commissionsCurrency?: string;
    equityWithLoan?: number;
    initMargin?: number;
    initMarginBefore?: number;
    maintMargin?: number;
    maintMarginBefore?: number;
    marginCurrency?: string;
    maxCommissions?: number;
    minCommissions?: number;
}
export declare class PostAccountsAccountOrderImpactRequest extends SpeakeasyBase {
    pathParams: PostAccountsAccountOrderImpactPathParams;
    request: PostAccountsAccountOrderImpactRequestBody;
}
export declare class PostAccountsAccountOrderImpactResponse extends SpeakeasyBase {
    contentType: string;
    postAccountsAccountOrderImpact200ApplicationJsonObject?: PostAccountsAccountOrderImpact200ApplicationJson;
    statusCode: number;
}
