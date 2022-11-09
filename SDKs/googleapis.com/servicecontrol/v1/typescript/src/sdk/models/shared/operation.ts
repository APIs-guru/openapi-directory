import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogEntry } from "./logentry";
import { MetricValueSet } from "./metricvalueset";
import { QuotaProperties } from "./quotaproperties";
import { ResourceInfo } from "./resourceinfo";
import { TraceSpan } from "./tracespan";

export enum OperationImportanceEnum {
    Low = "LOW"
,    High = "HIGH"
,    Debug = "DEBUG"
}


// Operation
/** 
 * Represents information regarding an operation.
**/
export class Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerId" })
  consumerId?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=importance" })
  importance?: OperationImportanceEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=logEntries", elemType: shared.LogEntry })
  logEntries?: LogEntry[];

  @Metadata({ data: "json, name=metricValueSets", elemType: shared.MetricValueSet })
  metricValueSets?: MetricValueSet[];

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=operationName" })
  operationName?: string;

  @Metadata({ data: "json, name=quotaProperties" })
  quotaProperties?: QuotaProperties;

  @Metadata({ data: "json, name=resources", elemType: shared.ResourceInfo })
  resources?: ResourceInfo[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=traceSpans", elemType: shared.TraceSpan })
  traceSpans?: TraceSpan[];

  @Metadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
