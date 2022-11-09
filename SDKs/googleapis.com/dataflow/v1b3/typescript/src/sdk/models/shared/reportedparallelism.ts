import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportedParallelism
/** 
 * Represents the level of parallelism in a WorkItem's input, reported by the worker.
**/
export class ReportedParallelism extends SpeakeasyBase {
  @Metadata({ data: "json, name=isInfinite" })
  isInfinite?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
