import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartOptions } from "./chartoptions";
import { DataSet } from "./dataset";
import { Threshold } from "./threshold";
import { Axis } from "./axis";



// XyChart
/** 
 * A chart that displays data on a 2D (X and Y axes) plane.
**/
export class XyChart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chartOptions" })
  chartOptions?: ChartOptions;

  @SpeakeasyMetadata({ data: "json, name=dataSets", elemType: DataSet })
  dataSets?: DataSet[];

  @SpeakeasyMetadata({ data: "json, name=thresholds", elemType: Threshold })
  thresholds?: Threshold[];

  @SpeakeasyMetadata({ data: "json, name=timeshiftDuration" })
  timeshiftDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=xAxis" })
  xAxis?: Axis;

  @SpeakeasyMetadata({ data: "json, name=y2Axis" })
  y2Axis?: Axis;

  @SpeakeasyMetadata({ data: "json, name=yAxis" })
  yAxis?: Axis;
}
