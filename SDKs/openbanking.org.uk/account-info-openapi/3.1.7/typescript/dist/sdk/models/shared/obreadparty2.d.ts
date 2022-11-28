import { SpeakeasyBase } from "../../../internal/utils";
import { ObParty2 } from "./obparty2";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class ObReadParty2Data extends SpeakeasyBase {
    party?: ObParty2;
}
export declare class ObReadParty2 extends SpeakeasyBase {
    data: ObReadParty2Data;
    links?: Links;
    meta?: Meta;
}
