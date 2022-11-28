import { SpeakeasyBase } from "../../../internal/utils";
import { ObStandingOrder6 } from "./obstandingorder6";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class ObReadStandingOrder6Data extends SpeakeasyBase {
    standingOrder?: ObStandingOrder6[];
}
export declare class ObReadStandingOrder6 extends SpeakeasyBase {
    data: ObReadStandingOrder6Data;
    links?: Links;
    meta?: Meta;
}
