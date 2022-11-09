import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppStartTime } from "./appstarttime";
import { GraphicsStats } from "./graphicsstats";
import { PerfEnvironment } from "./perfenvironment";

export enum PerfMetricsSummaryPerfMetricsEnum {
    PerfMetricTypeUnspecified = "perfMetricTypeUnspecified"
,    Memory = "memory"
,    Cpu = "cpu"
,    Network = "network"
,    Graphics = "graphics"
}


// PerfMetricsSummary
/** 
 * A summary of perf metrics collected and performance environment info
**/
export class PerfMetricsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=appStartTime" })
  appStartTime?: AppStartTime;

  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=graphicsStats" })
  graphicsStats?: GraphicsStats;

  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=perfEnvironment" })
  perfEnvironment?: PerfEnvironment;

  @Metadata({ data: "json, name=perfMetrics" })
  perfMetrics?: PerfMetricsSummaryPerfMetricsEnum[];

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=stepId" })
  stepId?: string;
}
