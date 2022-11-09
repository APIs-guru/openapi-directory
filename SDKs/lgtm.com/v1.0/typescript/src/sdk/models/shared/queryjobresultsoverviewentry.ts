import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Project } from "./project";

export enum QueryjobResultsOverviewEntryStatusEnum {
    Success = "success"
,    Error = "error"
}


export class QueryjobResultsOverviewEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=external" })
  external?: number;

  @Metadata({ data: "json, name=internal" })
  internal?: number;

  @Metadata({ data: "json, name=project" })
  project?: Project;

  @Metadata({ data: "json, name=status" })
  status?: QueryjobResultsOverviewEntryStatusEnum;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
