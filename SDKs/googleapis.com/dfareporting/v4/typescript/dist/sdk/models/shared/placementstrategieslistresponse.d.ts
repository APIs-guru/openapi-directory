import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementStrategy } from "./placementstrategy";
/**
 * Placement Strategy List Response
**/
export declare class PlacementStrategiesListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    placementStrategies?: PlacementStrategy[];
}
