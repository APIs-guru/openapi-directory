import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WaterfallChartCustomSubtotal
/** 
 * A custom subtotal column for a waterfall chart series.
**/
export class WaterfallChartCustomSubtotal extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataIsSubtotal" })
  dataIsSubtotal?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=subtotalIndex" })
  subtotalIndex?: number;
}
