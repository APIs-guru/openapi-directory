import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxStandingOrder
/** 
 * Standing order information
**/
export class SandboxStandingOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=finalPaymentDate" })
  finalPaymentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=firstPaymentDate" })
  firstPaymentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=lastPaymentDate" })
  lastPaymentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=nextPaymentDate" })
  nextPaymentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
