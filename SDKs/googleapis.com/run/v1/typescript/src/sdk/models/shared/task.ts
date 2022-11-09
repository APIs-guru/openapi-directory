import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectMeta } from "./objectmeta";
import { TaskSpec } from "./taskspec";
import { TaskStatus } from "./taskstatus";


// Task
/** 
 * Task represents a single run of a container to completion.
**/
export class Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @Metadata({ data: "json, name=spec" })
  spec?: TaskSpec;

  @Metadata({ data: "json, name=status" })
  status?: TaskStatus;
}
