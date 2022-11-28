import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsPartialRefund } from "./orderreturnspartialrefund";



export class OrderreturnsRefundOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullRefund" })
  fullRefund?: boolean;

  @SpeakeasyMetadata({ data: "json, name=partialRefund" })
  partialRefund?: OrderreturnsPartialRefund;

  @SpeakeasyMetadata({ data: "json, name=paymentType" })
  paymentType?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonText" })
  reasonText?: string;

  @SpeakeasyMetadata({ data: "json, name=returnRefundReason" })
  returnRefundReason?: string;
}
