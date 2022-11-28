import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
/**
 * The domain of a chart. For example, if charting stock prices over time, this would be the date.
**/
export declare class BasicChartDomain extends SpeakeasyBase {
    domain?: ChartData;
    reversed?: boolean;
}
