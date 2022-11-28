import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMarketdataExchangeComponents200ApplicationJsonMapping extends SpeakeasyBase {
    bit?: number;
    code?: string;
    exchange?: string;
}
export declare class GetMarketdataExchangeComponents200ApplicationJson extends SpeakeasyBase {
    complete?: boolean;
    conId?: number;
    mapping?: GetMarketdataExchangeComponents200ApplicationJsonMapping[];
}
export declare class GetMarketdataExchangeComponentsResponse extends SpeakeasyBase {
    contentType: string;
    getMarketdataExchangeComponents200ApplicationJsonObjects?: GetMarketdataExchangeComponents200ApplicationJson[];
    statusCode: number;
}
