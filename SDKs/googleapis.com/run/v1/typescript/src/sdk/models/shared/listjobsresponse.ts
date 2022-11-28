import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
import { ListMeta } from "./listmeta";



// ListJobsResponse
/** 
 * ListJobsResponse is a list of Jobs resources.
**/
export class ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Job })
  items?: Job[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
