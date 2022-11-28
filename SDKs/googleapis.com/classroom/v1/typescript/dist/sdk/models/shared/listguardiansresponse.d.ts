import { SpeakeasyBase } from "../../../internal/utils";
import { Guardian } from "./guardian";
/**
 * Response when listing guardians.
**/
export declare class ListGuardiansResponse extends SpeakeasyBase {
    guardians?: Guardian[];
    nextPageToken?: string;
}
