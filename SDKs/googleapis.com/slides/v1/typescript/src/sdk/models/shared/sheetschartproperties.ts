import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageProperties } from "./imageproperties";



// SheetsChartProperties
/** 
 * The properties of the SheetsChart.
**/
export class SheetsChartProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartImageProperties" })
  chartImageProperties?: ImageProperties;
}
