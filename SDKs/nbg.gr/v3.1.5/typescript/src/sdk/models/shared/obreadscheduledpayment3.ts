import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataScheduledPayment3 } from "./obreaddatascheduledpayment3";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadScheduledPayment3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataScheduledPayment3;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
