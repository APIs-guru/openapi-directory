import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare enum HiuHealthInformationRequestResponseHiRequestSessionStatusEnum {
    Requested = "REQUESTED",
    Acknowledged = "ACKNOWLEDGED"
}
export declare class HiuHealthInformationRequestResponseHiRequest extends SpeakeasyBase {
    sessionStatus: HiuHealthInformationRequestResponseHiRequestSessionStatusEnum;
    transactionId: string;
}
export declare class HiuHealthInformationRequestResponse extends SpeakeasyBase {
    error?: Error;
    hiRequest?: HiuHealthInformationRequestResponseHiRequest;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
