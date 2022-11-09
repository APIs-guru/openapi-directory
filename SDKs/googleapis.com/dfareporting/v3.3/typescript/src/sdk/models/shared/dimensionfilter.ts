import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionFilter
/** 
 * Represents a dimension filter.
**/
export class DimensionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
