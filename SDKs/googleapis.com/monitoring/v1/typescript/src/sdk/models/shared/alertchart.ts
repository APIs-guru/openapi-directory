import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AlertChart
/** 
 * A chart that displays alert policy data.
**/
export class AlertChart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
