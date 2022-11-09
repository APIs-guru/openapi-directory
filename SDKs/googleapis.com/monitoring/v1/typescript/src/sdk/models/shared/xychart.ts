import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChartOptions } from "./chartoptions";
import { DataSet } from "./dataset";
import { Threshold } from "./threshold";
import { Axis } from "./axis";
import { Axis } from "./axis";
import { Axis } from "./axis";


// XyChart
/** 
 * A chart that displays data on a 2D (X and Y axes) plane.
**/
export class XyChart extends SpeakeasyBase {
  @Metadata({ data: "json, name=chartOptions" })
  chartOptions?: ChartOptions;

  @Metadata({ data: "json, name=dataSets", elemType: shared.DataSet })
  dataSets?: DataSet[];

  @Metadata({ data: "json, name=thresholds", elemType: shared.Threshold })
  thresholds?: Threshold[];

  @Metadata({ data: "json, name=timeshiftDuration" })
  timeshiftDuration?: string;

  @Metadata({ data: "json, name=xAxis" })
  xAxis?: Axis;

  @Metadata({ data: "json, name=y2Axis" })
  y2Axis?: Axis;

  @Metadata({ data: "json, name=yAxis" })
  yAxis?: Axis;
}
