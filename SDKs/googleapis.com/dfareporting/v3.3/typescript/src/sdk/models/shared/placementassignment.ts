import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";



// PlacementAssignment
/** 
 * Placement Assignment.
**/
export class PlacementAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=placementId" })
  placementId?: string;

  @SpeakeasyMetadata({ data: "json, name=placementIdDimensionValue" })
  placementIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=sslRequired" })
  sslRequired?: boolean;
}
