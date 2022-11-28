import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogEntry } from "./logentry";
import { MetricValueSet } from "./metricvalueset";
import { QuotaProperties } from "./quotaproperties";
import { ResourceInfo } from "./resourceinfo";
import { TraceSpan } from "./tracespan";


export enum OperationImportanceEnum {
    Low = "LOW",
    High = "HIGH",
    Debug = "DEBUG"
}


// Operation
/** 
 * Represents information regarding an operation.
**/
export class Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerId" })
  consumerId?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=importance" })
  importance?: OperationImportanceEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=logEntries", elemType: LogEntry })
  logEntries?: LogEntry[];

  @SpeakeasyMetadata({ data: "json, name=metricValueSets", elemType: MetricValueSet })
  metricValueSets?: MetricValueSet[];

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=operationName" })
  operationName?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaProperties" })
  quotaProperties?: QuotaProperties;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ResourceInfo })
  resources?: ResourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=traceSpans", elemType: TraceSpan })
  traceSpans?: TraceSpan[];

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
