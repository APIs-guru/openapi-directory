import { SpeakeasyBase } from "../../../internal/utils";
import { AlertChart } from "./alertchart";
import { CollapsibleGroup } from "./collapsiblegroup";
import { LogsPanel } from "./logspanel";
import { Scorecard } from "./scorecard";
import { Text } from "./text";
import { TimeSeriesTable } from "./timeseriestable";
import { XyChart } from "./xychart";
/**
 * Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
**/
export declare class Widget extends SpeakeasyBase {
    alertChart?: AlertChart;
    blank?: Map<string, any>;
    collapsibleGroup?: CollapsibleGroup;
    logsPanel?: LogsPanel;
    scorecard?: Scorecard;
    text?: Text;
    timeSeriesTable?: TimeSeriesTable;
    title?: string;
    xyChart?: XyChart;
}
