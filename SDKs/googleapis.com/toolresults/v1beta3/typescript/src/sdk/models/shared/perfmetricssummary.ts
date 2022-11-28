import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppStartTime } from "./appstarttime";
import { GraphicsStats } from "./graphicsstats";
import { PerfEnvironment } from "./perfenvironment";


export enum PerfMetricsSummaryPerfMetricsEnum {
    PerfMetricTypeUnspecified = "perfMetricTypeUnspecified",
    Memory = "memory",
    Cpu = "cpu",
    Network = "network",
    Graphics = "graphics"
}


// PerfMetricsSummary
/** 
 * A summary of perf metrics collected and performance environment info
**/
export class PerfMetricsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appStartTime" })
  appStartTime?: AppStartTime;

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=graphicsStats" })
  graphicsStats?: GraphicsStats;

  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=perfEnvironment" })
  perfEnvironment?: PerfEnvironment;

  @SpeakeasyMetadata({ data: "json, name=perfMetrics" })
  perfMetrics?: PerfMetricsSummaryPerfMetricsEnum[];

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=stepId" })
  stepId?: string;
}
