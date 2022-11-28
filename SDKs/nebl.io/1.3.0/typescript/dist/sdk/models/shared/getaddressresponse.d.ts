import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAddressResponse extends SpeakeasyBase {
    addrStr?: string;
    balance?: number;
    balanceSat?: number;
    totalReceived?: number;
    totalReceivedSat?: number;
    totalSent?: number;
    totalSentSat?: number;
    transactions?: string[];
    txAppearances?: number;
    unconfirmedBalance?: number;
    unconfirmedBalanceSat?: number;
    unconfirmedTxAppearances?: number;
}
