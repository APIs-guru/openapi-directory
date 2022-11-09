import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryResultEntry } from "./queryresultentry";
import { Project } from "./project";


export class QueryjobProjectResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: string[];

  @Metadata({ data: "json, name=data", elemType: shared.QueryResultEntry, elemDepth: 2 })
  data?: QueryResultEntry[][];

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=project" })
  project?: Project;
}
