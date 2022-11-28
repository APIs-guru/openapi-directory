import { SpeakeasyBase } from "../../../internal/utils";
import { ObScheduledPayment3 } from "./obscheduledpayment3";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class ObReadScheduledPayment3Data extends SpeakeasyBase {
    scheduledPayment?: ObScheduledPayment3[];
}
export declare class ObReadScheduledPayment3 extends SpeakeasyBase {
    data: ObReadScheduledPayment3Data;
    links?: Links;
    meta?: Meta;
}
