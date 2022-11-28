import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxBeneficiary } from "./sandboxbeneficiary";
import { SandboxBankAccountInfo } from "./sandboxbankaccountinfo";
import { SandboxParty } from "./sandboxparty";
import { SandboxScheduledPayment } from "./sandboxscheduledpayment";
import { SandboxStandingOrder } from "./sandboxstandingorder";
import { SandboxStatement } from "./sandboxstatement";
import { SandboxTransaction } from "./sandboxtransaction";
/**
 * Sandbox bank account
**/
export declare class SandboxBankAccount extends SpeakeasyBase {
    beneficiaries?: SandboxBeneficiary[];
    info?: SandboxBankAccountInfo;
    party?: SandboxParty;
    scheduledPayments?: SandboxScheduledPayment[];
    standingOrders?: SandboxStandingOrder[];
    statements?: SandboxStatement[];
    transactions?: SandboxTransaction[];
}
