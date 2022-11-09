import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SandboxBeneficiary } from "./sandboxbeneficiary";
import { SandboxBankAccountInfo } from "./sandboxbankaccountinfo";
import { SandboxParty } from "./sandboxparty";
import { SandboxScheduledPayment } from "./sandboxscheduledpayment";
import { SandboxStandingOrder } from "./sandboxstandingorder";
import { SandboxStatement } from "./sandboxstatement";
import { SandboxTransaction } from "./sandboxtransaction";


// SandboxBankAccount
/** 
 * Sandbox bank account
**/
export class SandboxBankAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=beneficiaries", elemType: shared.SandboxBeneficiary })
  beneficiaries?: SandboxBeneficiary[];

  @Metadata({ data: "json, name=info" })
  info?: SandboxBankAccountInfo;

  @Metadata({ data: "json, name=party" })
  party?: SandboxParty;

  @Metadata({ data: "json, name=scheduledPayments", elemType: shared.SandboxScheduledPayment })
  scheduledPayments?: SandboxScheduledPayment[];

  @Metadata({ data: "json, name=standingOrders", elemType: shared.SandboxStandingOrder })
  standingOrders?: SandboxStandingOrder[];

  @Metadata({ data: "json, name=statements", elemType: shared.SandboxStatement })
  statements?: SandboxStatement[];

  @Metadata({ data: "json, name=transactions", elemType: shared.SandboxTransaction })
  transactions?: SandboxTransaction[];
}
