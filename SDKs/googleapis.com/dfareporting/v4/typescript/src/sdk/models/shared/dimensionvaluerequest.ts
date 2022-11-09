import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionFilter } from "./dimensionfilter";


// DimensionValueRequest
/** 
 * Represents a DimensionValuesRequest.
**/
export class DimensionValueRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionName" })
  dimensionName?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=filters", elemType: shared.DimensionFilter })
  filters?: DimensionFilter[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
