import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LineStyle } from "./linestyle";
import { WaterfallChartDomain } from "./waterfallchartdomain";
import { WaterfallChartSeries } from "./waterfallchartseries";
import { DataLabel } from "./datalabel";

export enum WaterfallChartSpecStackedTypeEnum {
    WaterfallStackedTypeUnspecified = "WATERFALL_STACKED_TYPE_UNSPECIFIED"
,    Stacked = "STACKED"
,    Sequential = "SEQUENTIAL"
}


// WaterfallChartSpec
/** 
 * A waterfall chart.
**/
export class WaterfallChartSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorLineStyle" })
  connectorLineStyle?: LineStyle;

  @Metadata({ data: "json, name=domain" })
  domain?: WaterfallChartDomain;

  @Metadata({ data: "json, name=firstValueIsTotal" })
  firstValueIsTotal?: boolean;

  @Metadata({ data: "json, name=hideConnectorLines" })
  hideConnectorLines?: boolean;

  @Metadata({ data: "json, name=series", elemType: shared.WaterfallChartSeries })
  series?: WaterfallChartSeries[];

  @Metadata({ data: "json, name=stackedType" })
  stackedType?: WaterfallChartSpecStackedTypeEnum;

  @Metadata({ data: "json, name=totalDataLabel" })
  totalDataLabel?: DataLabel;
}
