import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TestnetGetAddressBalancePathParams extends SpeakeasyBase {
    address: string;
}
export declare class TestnetGetAddressBalanceRequest extends SpeakeasyBase {
    pathParams: TestnetGetAddressBalancePathParams;
}
export declare class TestnetGetAddressBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressBalanceResponse?: number;
}
