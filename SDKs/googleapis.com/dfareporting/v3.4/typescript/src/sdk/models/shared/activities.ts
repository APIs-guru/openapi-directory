import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionValue } from "./dimensionvalue";


// Activities
/** 
 * Represents an activity group.
**/
export class Activities extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.DimensionValue })
  filters?: DimensionValue[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];
}
