import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=alertChart" })
  alertChart?: AlertChart;

  @SpeakeasyMetadata({ data: "json, name=blank" })
  blank?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=collapsibleGroup" })
  collapsibleGroup?: CollapsibleGroup;

  @SpeakeasyMetadata({ data: "json, name=logsPanel" })
  logsPanel?: LogsPanel;

  @SpeakeasyMetadata({ data: "json, name=scorecard" })
  scorecard?: Scorecard;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: Text;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesTable" })
  timeSeriesTable?: TimeSeriesTable;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=xyChart" })
  xyChart?: XyChart;
}
