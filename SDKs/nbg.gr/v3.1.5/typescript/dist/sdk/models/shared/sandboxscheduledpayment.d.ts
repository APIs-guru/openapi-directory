import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scheduled payment information
**/
export declare class SandboxScheduledPayment extends SpeakeasyBase {
    amount?: number;
    description?: string;
    executionDate?: Date;
    senderReference?: string;
}
