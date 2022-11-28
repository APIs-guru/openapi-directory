import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId?: number;

  @SpeakeasyMetadata({ data: "json, name=project_number" })
  projectNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=result_file_id" })
  resultFileId?: string;
}
