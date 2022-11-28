import { SpeakeasyBase } from "../../../internal/utils";
import { ObAccount6 } from "./obaccount6";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class ObReadAccount6Data extends SpeakeasyBase {
    account?: ObAccount6[];
}
export declare class ObReadAccount6 extends SpeakeasyBase {
    data: ObReadAccount6Data;
    links?: Links;
    meta?: Meta;
}
