import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObScheduledPayment3 } from "./obscheduledpayment3";


export class ObReadDataScheduledPayment3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScheduledPayment", elemType: shared.ObScheduledPayment3 })
  scheduledPayment?: ObScheduledPayment3[];
}
