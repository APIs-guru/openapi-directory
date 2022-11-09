import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  project?: shared.Project;

  @Metadata()
  statusCode: number;
}
