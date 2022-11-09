import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlertChart } from "./alertchart";
import { CollapsibleGroup } from "./collapsiblegroup";
import { LogsPanel } from "./logspanel";
import { Scorecard } from "./scorecard";
import { Text } from "./text";
import { TimeSeriesTable } from "./timeseriestable";
import { XyChart } from "./xychart";


// Widget
/** 
 * Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
**/
export class Widget extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertChart" })
  alertChart?: AlertChart;

  @Metadata({ data: "json, name=blank" })
  blank?: Map<string, any>;

  @Metadata({ data: "json, name=collapsibleGroup" })
  collapsibleGroup?: CollapsibleGroup;

  @Metadata({ data: "json, name=logsPanel" })
  logsPanel?: LogsPanel;

  @Metadata({ data: "json, name=scorecard" })
  scorecard?: Scorecard;

  @Metadata({ data: "json, name=text" })
  text?: Text;

  @Metadata({ data: "json, name=timeSeriesTable" })
  timeSeriesTable?: TimeSeriesTable;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=xyChart" })
  xyChart?: XyChart;
}
