import { SpeakeasyBase } from "../../../internal/utils";
import { PulseAnswer } from "./pulseanswer";
export declare class PulseResponse extends SpeakeasyBase {
    learnerFirstName?: string;
    learnerId?: string;
    learnerLastName?: string;
    pulseBaseId?: string;
    pulseInstanceId?: string;
    pulseQuestion?: string;
    pulseRunDurationMinutes?: number;
    pulseRunStart?: Date;
    pulseType?: string;
    response?: PulseAnswer;
    responseTime?: Date;
}
