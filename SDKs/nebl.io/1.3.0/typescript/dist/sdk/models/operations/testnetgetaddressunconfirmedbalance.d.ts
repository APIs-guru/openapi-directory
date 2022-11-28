import { SpeakeasyBase } from "../../../internal/utils";
export declare class TestnetGetAddressUnconfirmedBalancePathParams extends SpeakeasyBase {
    address: string;
}
export declare class TestnetGetAddressUnconfirmedBalanceRequest extends SpeakeasyBase {
    pathParams: TestnetGetAddressUnconfirmedBalancePathParams;
}
export declare class TestnetGetAddressUnconfirmedBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressUnconfirmedBalanceResponse?: number;
}
