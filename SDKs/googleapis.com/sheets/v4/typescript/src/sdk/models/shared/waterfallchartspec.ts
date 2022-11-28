import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineStyle } from "./linestyle";
import { WaterfallChartDomain } from "./waterfallchartdomain";
import { WaterfallChartSeries } from "./waterfallchartseries";
import { DataLabel } from "./datalabel";


export enum WaterfallChartSpecStackedTypeEnum {
    WaterfallStackedTypeUnspecified = "WATERFALL_STACKED_TYPE_UNSPECIFIED",
    Stacked = "STACKED",
    Sequential = "SEQUENTIAL"
}


// WaterfallChartSpec
/** 
 * A waterfall chart.
**/
export class WaterfallChartSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorLineStyle" })
  connectorLineStyle?: LineStyle;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: WaterfallChartDomain;

  @SpeakeasyMetadata({ data: "json, name=firstValueIsTotal" })
  firstValueIsTotal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideConnectorLines" })
  hideConnectorLines?: boolean;

  @SpeakeasyMetadata({ data: "json, name=series", elemType: WaterfallChartSeries })
  series?: WaterfallChartSeries[];

  @SpeakeasyMetadata({ data: "json, name=stackedType" })
  stackedType?: WaterfallChartSpecStackedTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=totalDataLabel" })
  totalDataLabel?: DataLabel;
}
