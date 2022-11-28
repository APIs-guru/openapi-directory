import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CDMA Network measurement
**/
export declare class CdmaNmr extends SpeakeasyBase {
    bsid?: number;
    channel: number;
    pilotPower?: number;
    pnOffset: number;
}
