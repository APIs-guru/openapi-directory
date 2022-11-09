import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxScheduledPayment
/** 
 * Scheduled payment information
**/
export class SandboxScheduledPayment extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=executionDate" })
  executionDate?: Date;

  @Metadata({ data: "json, name=senderReference" })
  senderReference?: string;
}
