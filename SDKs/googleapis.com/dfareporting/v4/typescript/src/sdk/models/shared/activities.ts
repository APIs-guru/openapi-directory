import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";



// Activities
/** 
 * Represents an activity group.
**/
export class Activities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: DimensionValue })
  filters?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];
}
