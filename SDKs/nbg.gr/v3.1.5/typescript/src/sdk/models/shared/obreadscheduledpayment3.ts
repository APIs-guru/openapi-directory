import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObReadDataScheduledPayment3 } from "./obreaddatascheduledpayment3";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadScheduledPayment3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadDataScheduledPayment3;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
