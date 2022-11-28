import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObScheduledPayment3 } from "./obscheduledpayment3";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadScheduledPayment3Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScheduledPayment", elemType: ObScheduledPayment3 })
  scheduledPayment?: ObScheduledPayment3[];
}


export class ObReadScheduledPayment3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadScheduledPayment3Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
