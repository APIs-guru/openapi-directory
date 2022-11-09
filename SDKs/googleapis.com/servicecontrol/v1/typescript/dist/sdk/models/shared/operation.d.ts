import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LogEntry } from "./logentry";
import { MetricValueSet } from "./metricvalueset";
import { QuotaProperties } from "./quotaproperties";
import { ResourceInfo } from "./resourceinfo";
import { TraceSpan } from "./tracespan";
export declare enum OperationImportanceEnum {
    Low = "LOW",
    High = "HIGH",
    Debug = "DEBUG"
}
/**
 * Represents information regarding an operation.
**/
export declare class Operation extends SpeakeasyBase {
    consumerId?: string;
    endTime?: string;
    importance?: OperationImportanceEnum;
    labels?: Map<string, string>;
    logEntries?: LogEntry[];
    metricValueSets?: MetricValueSet[];
    operationId?: string;
    operationName?: string;
    quotaProperties?: QuotaProperties;
    resources?: ResourceInfo[];
    startTime?: string;
    traceSpans?: TraceSpan[];
    userLabels?: Map<string, string>;
}
