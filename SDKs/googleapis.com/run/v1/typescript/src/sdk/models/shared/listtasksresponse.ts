import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Task } from "./task";
import { ListMeta } from "./listmeta";


// ListTasksResponse
/** 
 * ListTasksResponse is a list of Tasks resources.
**/
export class ListTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Task })
  items?: Task[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ListMeta;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
