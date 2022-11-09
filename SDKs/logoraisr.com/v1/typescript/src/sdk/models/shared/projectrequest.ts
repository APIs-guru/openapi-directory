import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Process } from "./process";


export class ProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=file_id" })
  fileId: string;

  @Metadata({ data: "json, name=process" })
  process?: Process;

  @Metadata({ data: "json, name=project_title" })
  projectTitle: string;
}
