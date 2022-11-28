import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DimensionFilter
/** 
 * Represents a dimension filter.
**/
export class DimensionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
