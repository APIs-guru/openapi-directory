import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObScheduledPayment3 } from "./obscheduledpayment3";



export class ObReadDataScheduledPayment3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScheduledPayment", elemType: ObScheduledPayment3 })
  scheduledPayment?: ObScheduledPayment3[];
}
