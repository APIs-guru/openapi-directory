import { SpeakeasyBase } from "../../../internal/utils";
import { FailurePolicy } from "./failurepolicy";
/**
 * Describes EventTrigger, used to request events be sent from another service.
**/
export declare class EventTrigger extends SpeakeasyBase {
    eventType?: string;
    failurePolicy?: FailurePolicy;
    resource?: string;
    service?: string;
}
