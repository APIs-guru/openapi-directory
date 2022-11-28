import { SpeakeasyBase } from "../../../internal/utils";
import { MobileCarrier } from "./mobilecarrier";
/**
 * Mobile Carrier List Response
**/
export declare class MobileCarriersListResponse extends SpeakeasyBase {
    kind?: string;
    mobileCarriers?: MobileCarrier[];
}
