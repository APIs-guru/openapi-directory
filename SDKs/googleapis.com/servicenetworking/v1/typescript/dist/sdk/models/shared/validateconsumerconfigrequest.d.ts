import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerProject } from "./consumerproject";
import { RangeReservation } from "./rangereservation";
export declare class ValidateConsumerConfigRequest extends SpeakeasyBase {
    checkServiceNetworkingUsePermission?: boolean;
    consumerNetwork?: string;
    consumerProject?: ConsumerProject;
    rangeReservation?: RangeReservation;
    validateNetwork?: boolean;
}
