import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CounterStructuredNameOriginEnum {
    System = "SYSTEM"
,    User = "USER"
}

export enum CounterStructuredNamePortionEnum {
    All = "ALL"
,    Key = "KEY"
,    Value = "VALUE"
}


// CounterStructuredName
/** 
 * Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
**/
export class CounterStructuredName extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentStepName" })
  componentStepName?: string;

  @Metadata({ data: "json, name=executionStepName" })
  executionStepName?: string;

  @Metadata({ data: "json, name=inputIndex" })
  inputIndex?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=origin" })
  origin?: CounterStructuredNameOriginEnum;

  @Metadata({ data: "json, name=originNamespace" })
  originNamespace?: string;

  @Metadata({ data: "json, name=originalRequestingStepName" })
  originalRequestingStepName?: string;

  @Metadata({ data: "json, name=originalStepName" })
  originalStepName?: string;

  @Metadata({ data: "json, name=portion" })
  portion?: CounterStructuredNamePortionEnum;

  @Metadata({ data: "json, name=workerId" })
  workerId?: string;
}
