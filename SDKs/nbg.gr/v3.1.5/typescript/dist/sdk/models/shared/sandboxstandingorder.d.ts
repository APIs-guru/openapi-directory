import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Standing order information
**/
export declare class SandboxStandingOrder extends SpeakeasyBase {
    amount?: number;
    description?: string;
    finalPaymentDate?: Date;
    firstPaymentDate?: Date;
    frequency: string;
    lastPaymentDate?: Date;
    nextPaymentDate?: Date;
    status?: string;
}
