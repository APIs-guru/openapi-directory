import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestTransferActionParamEnum } from "./requesttransferactionparamenum";
export declare class UpdateCallRequestTransferNccoDestination extends SpeakeasyBase {
    ncco: Map<string, any>[];
    type: string;
}
export declare class UpdateCallRequestTransferNcco extends SpeakeasyBase {
    action: RequestTransferActionParamEnum;
    destination: UpdateCallRequestTransferNccoDestination;
}
