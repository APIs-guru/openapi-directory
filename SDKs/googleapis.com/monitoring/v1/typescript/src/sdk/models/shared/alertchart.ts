import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AlertChart
/** 
 * A chart that displays alert policy data.
**/
export class AlertChart extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
