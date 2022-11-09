import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";
import { ListMeta } from "./listmeta";


// ListJobsResponse
/** 
 * ListJobsResponse is a list of Jobs resources.
**/
export class ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Job })
  items?: Job[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
