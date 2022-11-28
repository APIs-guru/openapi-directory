import { SpeakeasyBase } from "../../../internal/utils";
import { ChartOptions } from "./chartoptions";
import { DataSet } from "./dataset";
import { Threshold } from "./threshold";
import { Axis } from "./axis";
/**
 * A chart that displays data on a 2D (X and Y axes) plane.
**/
export declare class XyChart extends SpeakeasyBase {
    chartOptions?: ChartOptions;
    dataSets?: DataSet[];
    thresholds?: Threshold[];
    timeshiftDuration?: string;
    xAxis?: Axis;
    y2Axis?: Axis;
    yAxis?: Axis;
}
