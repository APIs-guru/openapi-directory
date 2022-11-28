import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the ModifyAckDeadline method.
**/
export declare class ModifyAckDeadlineRequest extends SpeakeasyBase {
    ackDeadlineSeconds?: number;
    ackIds?: string[];
}
