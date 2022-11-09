import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Meta } from "./meta";
import { ProjectsRow } from "./projectsrow";


export class OpenAqProjectsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=results", elemType: shared.ProjectsRow })
  results: ProjectsRow[];
}
