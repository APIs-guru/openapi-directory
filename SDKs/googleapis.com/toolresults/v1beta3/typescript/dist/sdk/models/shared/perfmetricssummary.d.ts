import { SpeakeasyBase } from "../../../internal/utils";
import { AppStartTime } from "./appstarttime";
import { GraphicsStats } from "./graphicsstats";
import { PerfEnvironment } from "./perfenvironment";
export declare enum PerfMetricsSummaryPerfMetricsEnum {
    PerfMetricTypeUnspecified = "perfMetricTypeUnspecified",
    Memory = "memory",
    Cpu = "cpu",
    Network = "network",
    Graphics = "graphics"
}
/**
 * A summary of perf metrics collected and performance environment info
**/
export declare class PerfMetricsSummary extends SpeakeasyBase {
    appStartTime?: AppStartTime;
    executionId?: string;
    graphicsStats?: GraphicsStats;
    historyId?: string;
    perfEnvironment?: PerfEnvironment;
    perfMetrics?: PerfMetricsSummaryPerfMetricsEnum[];
    projectId?: string;
    stepId?: string;
}
