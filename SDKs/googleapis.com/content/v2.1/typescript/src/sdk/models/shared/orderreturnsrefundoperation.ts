import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderreturnsPartialRefund } from "./orderreturnspartialrefund";


export class OrderreturnsRefundOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullRefund" })
  fullRefund?: boolean;

  @Metadata({ data: "json, name=partialRefund" })
  partialRefund?: OrderreturnsPartialRefund;

  @Metadata({ data: "json, name=paymentType" })
  paymentType?: string;

  @Metadata({ data: "json, name=reasonText" })
  reasonText?: string;

  @Metadata({ data: "json, name=returnRefundReason" })
  returnRefundReason?: string;
}
