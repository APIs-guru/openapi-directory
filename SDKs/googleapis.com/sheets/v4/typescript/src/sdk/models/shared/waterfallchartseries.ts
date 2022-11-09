import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WaterfallChartCustomSubtotal } from "./waterfallchartcustomsubtotal";
import { ChartData } from "./chartdata";
import { DataLabel } from "./datalabel";
import { WaterfallChartColumnStyle } from "./waterfallchartcolumnstyle";
import { WaterfallChartColumnStyle } from "./waterfallchartcolumnstyle";
import { WaterfallChartColumnStyle } from "./waterfallchartcolumnstyle";


// WaterfallChartSeries
/** 
 * A single series of data for a waterfall chart.
**/
export class WaterfallChartSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=customSubtotals", elemType: shared.WaterfallChartCustomSubtotal })
  customSubtotals?: WaterfallChartCustomSubtotal[];

  @Metadata({ data: "json, name=data" })
  data?: ChartData;

  @Metadata({ data: "json, name=dataLabel" })
  dataLabel?: DataLabel;

  @Metadata({ data: "json, name=hideTrailingSubtotal" })
  hideTrailingSubtotal?: boolean;

  @Metadata({ data: "json, name=negativeColumnsStyle" })
  negativeColumnsStyle?: WaterfallChartColumnStyle;

  @Metadata({ data: "json, name=positiveColumnsStyle" })
  positiveColumnsStyle?: WaterfallChartColumnStyle;

  @Metadata({ data: "json, name=subtotalColumnsStyle" })
  subtotalColumnsStyle?: WaterfallChartColumnStyle;
}
