import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilter } from "./dimensionfilter";



// DimensionValueRequest
/** 
 * Represents a DimensionValuesRequest.
**/
export class DimensionValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: DimensionFilter })
  filters?: DimensionFilter[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
