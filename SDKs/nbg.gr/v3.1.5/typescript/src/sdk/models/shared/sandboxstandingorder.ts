import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxStandingOrder
/** 
 * Standing order information
**/
export class SandboxStandingOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=finalPaymentDate" })
  finalPaymentDate?: Date;

  @Metadata({ data: "json, name=firstPaymentDate" })
  firstPaymentDate?: Date;

  @Metadata({ data: "json, name=frequency" })
  frequency: string;

  @Metadata({ data: "json, name=lastPaymentDate" })
  lastPaymentDate?: Date;

  @Metadata({ data: "json, name=nextPaymentDate" })
  nextPaymentDate?: Date;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
