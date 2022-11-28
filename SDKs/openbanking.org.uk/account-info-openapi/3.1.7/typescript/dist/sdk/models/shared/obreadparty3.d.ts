import { SpeakeasyBase } from "../../../internal/utils";
import { ObParty2 } from "./obparty2";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class ObReadParty3Data extends SpeakeasyBase {
    party?: ObParty2[];
}
export declare class ObReadParty3 extends SpeakeasyBase {
    data: ObReadParty3Data;
    links?: Links;
    meta?: Meta;
}
