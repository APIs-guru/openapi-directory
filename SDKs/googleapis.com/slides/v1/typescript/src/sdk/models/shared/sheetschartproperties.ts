import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageProperties } from "./imageproperties";


// SheetsChartProperties
/** 
 * The properties of the SheetsChart.
**/
export class SheetsChartProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartImageProperties" })
  chartImageProperties?: ImageProperties;
}
