import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { ExecutionSpec } from "./executionspec";
import { ExecutionStatus } from "./executionstatus";



// Execution
/** 
 * Execution represents the configuration of a single execution. An execution is an immutable resource that references a container image which is run to completion.
**/
export class Execution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: ExecutionSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExecutionStatus;
}
