import { SpeakeasyBase } from "../../../internal/utils";
import { RequestTransferActionParamEnum } from "./requesttransferactionparamenum";
export declare class UpdateCallRequestTransferAnswerUrlDestination extends SpeakeasyBase {
    type: string;
    url: string[];
}
export declare class UpdateCallRequestTransferAnswerUrl extends SpeakeasyBase {
    action: RequestTransferActionParamEnum;
    destination: UpdateCallRequestTransferAnswerUrlDestination;
}
