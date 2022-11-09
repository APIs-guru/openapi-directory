import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlacementStrategy } from "./placementstrategy";


// PlacementStrategiesListResponse
/** 
 * Placement Strategy List Response
**/
export class PlacementStrategiesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=placementStrategies", elemType: shared.PlacementStrategy })
  placementStrategies?: PlacementStrategy[];
}
