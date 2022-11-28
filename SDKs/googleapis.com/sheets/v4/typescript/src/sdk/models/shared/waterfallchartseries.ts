import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WaterfallChartCustomSubtotal } from "./waterfallchartcustomsubtotal";
import { ChartData } from "./chartdata";
import { DataLabel } from "./datalabel";
import { WaterfallChartColumnStyle } from "./waterfallchartcolumnstyle";



// WaterfallChartSeries
/** 
 * A single series of data for a waterfall chart.
**/
export class WaterfallChartSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customSubtotals", elemType: WaterfallChartCustomSubtotal })
  customSubtotals?: WaterfallChartCustomSubtotal[];

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=dataLabel" })
  dataLabel?: DataLabel;

  @SpeakeasyMetadata({ data: "json, name=hideTrailingSubtotal" })
  hideTrailingSubtotal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=negativeColumnsStyle" })
  negativeColumnsStyle?: WaterfallChartColumnStyle;

  @SpeakeasyMetadata({ data: "json, name=positiveColumnsStyle" })
  positiveColumnsStyle?: WaterfallChartColumnStyle;

  @SpeakeasyMetadata({ data: "json, name=subtotalColumnsStyle" })
  subtotalColumnsStyle?: WaterfallChartColumnStyle;
}
