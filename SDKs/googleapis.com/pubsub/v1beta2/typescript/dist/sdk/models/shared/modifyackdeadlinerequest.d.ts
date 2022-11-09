import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Request for the ModifyAckDeadline method.
**/
export declare class ModifyAckDeadlineRequest extends SpeakeasyBase {
    ackDeadlineSeconds?: number;
    ackId?: string;
    ackIds?: string[];
}
