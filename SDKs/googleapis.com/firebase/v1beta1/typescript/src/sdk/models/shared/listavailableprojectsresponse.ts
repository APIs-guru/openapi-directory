import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectInfo } from "./projectinfo";


export class ListAvailableProjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=projectInfo", elemType: shared.ProjectInfo })
  projectInfo?: ProjectInfo[];
}
