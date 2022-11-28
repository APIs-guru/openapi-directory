import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Process } from "./process";



export class ProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId: string;

  @SpeakeasyMetadata({ data: "json, name=process" })
  process?: Process;

  @SpeakeasyMetadata({ data: "json, name=project_title" })
  projectTitle: string;
}
