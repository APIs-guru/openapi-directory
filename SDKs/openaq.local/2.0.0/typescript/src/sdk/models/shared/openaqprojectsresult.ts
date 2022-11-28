import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { ProjectsRow } from "./projectsrow";



export class OpenAqProjectsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ProjectsRow })
  results: ProjectsRow[];
}
