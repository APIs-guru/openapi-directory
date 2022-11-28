import { SpeakeasyBase } from "../../../internal/utils";
export declare class SevenGetListOfPaymentsQueryParams extends SpeakeasyBase {
    dateFrom?: string;
    dateTo?: string;
    limit?: string;
    orderBy?: string;
    page?: string;
    sortBy?: string;
}
export declare class SevenGetListOfPayments200ApplicationJsonData extends SpeakeasyBase {
    actuallyPaid?: number;
    orderDescription?: string;
    orderId?: string;
    outcomeAmount?: number;
    outcomeCurrency?: string;
    payAddress?: string;
    payAmount?: number;
    payCurrency?: string;
    paymentId?: number;
    paymentStatus?: string;
    priceAmount?: number;
    priceCurrency?: string;
    purchaseId?: string;
}
export declare class SevenGetListOfPayments200ApplicationJson extends SpeakeasyBase {
    data?: SevenGetListOfPayments200ApplicationJsonData[];
    limit?: number;
    page?: number;
    pagesCount?: number;
    total?: number;
}
export declare class SevenGetListOfPaymentsRequest extends SpeakeasyBase {
    queryParams: SevenGetListOfPaymentsQueryParams;
}
export declare class SevenGetListOfPaymentsResponse extends SpeakeasyBase {
    sevenGetListOfPayments200ApplicationJsonObject?: SevenGetListOfPayments200ApplicationJson;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
