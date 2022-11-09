import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectMeta } from "./objectmeta";
import { ExecutionSpec } from "./executionspec";
import { ExecutionStatus } from "./executionstatus";


// Execution
/** 
 * Execution represents the configuration of a single execution. An execution is an immutable resource that references a container image which is run to completion.
**/
export class Execution extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @Metadata({ data: "json, name=spec" })
  spec?: ExecutionSpec;

  @Metadata({ data: "json, name=status" })
  status?: ExecutionStatus;
}
