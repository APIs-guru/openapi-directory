import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValue } from "./dimensionvalue";


// PlacementAssignment
/** 
 * Placement Assignment.
**/
export class PlacementAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=placementId" })
  placementId?: string;

  @Metadata({ data: "json, name=placementIdDimensionValue" })
  placementIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=sslRequired" })
  sslRequired?: boolean;
}
