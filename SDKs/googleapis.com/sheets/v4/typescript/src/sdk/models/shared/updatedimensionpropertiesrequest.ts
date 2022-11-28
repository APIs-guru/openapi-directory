import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSheetDimensionRange } from "./datasourcesheetdimensionrange";
import { DimensionProperties } from "./dimensionproperties";
import { DimensionRange } from "./dimensionrange";



// UpdateDimensionPropertiesRequest
/** 
 * Updates properties of dimensions within the specified range.
**/
export class UpdateDimensionPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceSheetRange" })
  dataSourceSheetRange?: DataSourceSheetDimensionRange;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: DimensionProperties;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: DimensionRange;
}
