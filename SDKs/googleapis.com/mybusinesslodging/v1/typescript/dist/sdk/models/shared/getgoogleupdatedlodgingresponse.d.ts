import { SpeakeasyBase } from "../../../internal/utils";
import { Lodging } from "./lodging";
/**
 * Response message for LodgingService.GetGoogleUpdatedLodging
**/
export declare class GetGoogleUpdatedLodgingResponse extends SpeakeasyBase {
    diffMask?: string;
    lodging?: Lodging;
}
