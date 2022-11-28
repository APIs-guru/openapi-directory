import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=beneficiaries", elemType: SandboxBeneficiary })
  beneficiaries?: SandboxBeneficiary[];

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: SandboxBankAccountInfo;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: SandboxParty;

  @SpeakeasyMetadata({ data: "json, name=scheduledPayments", elemType: SandboxScheduledPayment })
  scheduledPayments?: SandboxScheduledPayment[];

  @SpeakeasyMetadata({ data: "json, name=standingOrders", elemType: SandboxStandingOrder })
  standingOrders?: SandboxStandingOrder[];

  @SpeakeasyMetadata({ data: "json, name=statements", elemType: SandboxStatement })
  statements?: SandboxStatement[];

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: SandboxTransaction })
  transactions?: SandboxTransaction[];
}
