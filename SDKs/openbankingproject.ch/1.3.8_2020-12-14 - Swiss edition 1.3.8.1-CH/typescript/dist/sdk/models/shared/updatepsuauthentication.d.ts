import { SpeakeasyBase } from "../../../internal/utils";
import { PsuData } from "./psudata";
/**
 * Content of the body of a Update PSU authentication request
 *
 * Password subfield is used.
 *
**/
export declare class UpdatePsuAuthentication extends SpeakeasyBase {
    psuData: PsuData;
}
