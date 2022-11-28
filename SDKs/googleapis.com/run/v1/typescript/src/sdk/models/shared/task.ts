import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { TaskSpec } from "./taskspec";
import { TaskStatus } from "./taskstatus";



// Task
/** 
 * Task represents a single run of a container to completion.
**/
export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: TaskSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskStatus;
}
