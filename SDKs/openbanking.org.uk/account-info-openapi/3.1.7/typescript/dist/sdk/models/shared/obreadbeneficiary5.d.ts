import { SpeakeasyBase } from "../../../internal/utils";
import { ObBeneficiary5 } from "./obbeneficiary5";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class ObReadBeneficiary5Data extends SpeakeasyBase {
    beneficiary?: ObBeneficiary5[];
}
export declare class ObReadBeneficiary5 extends SpeakeasyBase {
    data: ObReadBeneficiary5Data;
    links?: Links;
    meta?: Meta;
}
