import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObScheduledPayment3 } from "./obscheduledpayment3";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadScheduledPayment3Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScheduledPayment", elemType: shared.ObScheduledPayment3 })
  scheduledPayment?: ObScheduledPayment3[];
}


export class ObReadScheduledPayment3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadScheduledPayment3Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
