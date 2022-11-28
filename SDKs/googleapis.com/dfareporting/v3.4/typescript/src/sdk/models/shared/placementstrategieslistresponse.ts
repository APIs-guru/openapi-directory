import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementStrategy } from "./placementstrategy";



// PlacementStrategiesListResponse
/** 
 * Placement Strategy List Response
**/
export class PlacementStrategiesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=placementStrategies", elemType: PlacementStrategy })
  placementStrategies?: PlacementStrategy[];
}
