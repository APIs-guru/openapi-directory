import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceSheetDimensionRange } from "./datasourcesheetdimensionrange";
import { DimensionProperties } from "./dimensionproperties";
import { DimensionRange } from "./dimensionrange";


// UpdateDimensionPropertiesRequest
/** 
 * Updates properties of dimensions within the specified range.
**/
export class UpdateDimensionPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceSheetRange" })
  dataSourceSheetRange?: DataSourceSheetDimensionRange;

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: DimensionProperties;

  @Metadata({ data: "json, name=range" })
  range?: DimensionRange;
}
