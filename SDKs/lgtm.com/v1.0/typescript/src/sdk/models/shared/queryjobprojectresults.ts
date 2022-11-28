import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryResultEntry } from "./queryresultentry";
import { Project } from "./project";



export class QueryjobProjectResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=data", elemType: QueryResultEntry, elemDepth: 2 })
  data?: QueryResultEntry[][];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Project;
}
