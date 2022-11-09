import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaskList } from "./tasklist";


export class TaskLists extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.TaskList })
  items?: TaskList[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
