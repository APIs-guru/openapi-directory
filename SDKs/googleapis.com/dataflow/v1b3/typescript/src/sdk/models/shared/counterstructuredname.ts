import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CounterStructuredNameOriginEnum {
    System = "SYSTEM",
    User = "USER"
}

export enum CounterStructuredNamePortionEnum {
    All = "ALL",
    Key = "KEY",
    Value = "VALUE"
}


// CounterStructuredName
/** 
 * Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
**/
export class CounterStructuredName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentStepName" })
  componentStepName?: string;

  @SpeakeasyMetadata({ data: "json, name=executionStepName" })
  executionStepName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputIndex" })
  inputIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: CounterStructuredNameOriginEnum;

  @SpeakeasyMetadata({ data: "json, name=originNamespace" })
  originNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=originalRequestingStepName" })
  originalRequestingStepName?: string;

  @SpeakeasyMetadata({ data: "json, name=originalStepName" })
  originalStepName?: string;

  @SpeakeasyMetadata({ data: "json, name=portion" })
  portion?: CounterStructuredNamePortionEnum;

  @SpeakeasyMetadata({ data: "json, name=workerId" })
  workerId?: string;
}
