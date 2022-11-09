import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=project_id" })
  projectId?: number;

  @Metadata({ data: "json, name=project_number" })
  projectNumber?: number;

  @Metadata({ data: "json, name=result_file_id" })
  resultFileId?: string;
}
