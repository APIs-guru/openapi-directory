import { SpeakeasyBase } from "../../../internal/utils";
import { CdmaLocalId } from "./cdmalocalid";
import { CdmaNmr } from "./cdmanmr";
/**
 * CDMA measurement
**/
export declare class Cdma extends SpeakeasyBase {
    baseLat?: number;
    baseLng?: number;
    bsid: number;
    localId?: CdmaLocalId;
    nid: number;
    nmr?: CdmaNmr[];
    pilotPower?: number;
    rz?: number;
    sid: number;
}
