import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WaterfallChartCustomSubtotal
/** 
 * A custom subtotal column for a waterfall chart series.
**/
export class WaterfallChartCustomSubtotal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataIsSubtotal" })
  dataIsSubtotal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=subtotalIndex" })
  subtotalIndex?: number;
}
