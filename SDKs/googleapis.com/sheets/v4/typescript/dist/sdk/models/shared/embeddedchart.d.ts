import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
import { ChartSpec } from "./chartspec";
/**
 * A chart embedded in a sheet.
**/
export declare class EmbeddedChart extends SpeakeasyBase {
    border?: EmbeddedObjectBorder;
    chartId?: number;
    position?: EmbeddedObjectPosition;
    spec?: ChartSpec;
}
