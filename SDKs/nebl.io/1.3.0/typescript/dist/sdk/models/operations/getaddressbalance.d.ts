import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAddressBalancePathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetAddressBalanceRequest extends SpeakeasyBase {
    pathParams: GetAddressBalancePathParams;
}
export declare class GetAddressBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressBalanceResponse?: number;
}
