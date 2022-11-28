import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxScheduledPayment
/** 
 * Scheduled payment information
**/
export class SandboxScheduledPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=executionDate" })
  executionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=senderReference" })
  senderReference?: string;
}
