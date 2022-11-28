import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportedParallelism
/** 
 * Represents the level of parallelism in a WorkItem's input, reported by the worker.
**/
export class ReportedParallelism extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isInfinite" })
  isInfinite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
