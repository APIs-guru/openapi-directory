import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAddressUnconfirmedBalancePathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetAddressUnconfirmedBalanceRequest extends SpeakeasyBase {
    pathParams: GetAddressUnconfirmedBalancePathParams;
}
export declare class GetAddressUnconfirmedBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressUnconfirmedBalanceResponse?: number;
}
